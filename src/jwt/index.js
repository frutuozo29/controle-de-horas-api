const jwt = require('jsonwebtoken')
const key = require('./key')

const ignoredPaths = ['/api/auth']

module.exports.configureJwt = server => {
  server.use((req, res, next) => {
    try {
      if (ignoredPaths.includes(req.url)) {
        next()
        return
      }

      const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' })

      jwt.verify(token, key.tokenKey, async (error, payload) => {
        if (error) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

        req.user = payload
        next()
      })
    } catch (error) {
      return res.status(500).send({ auth: false, message: error })
    }
  })
}

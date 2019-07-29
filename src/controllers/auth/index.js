const userDomain = require('../../domain/user')
const jwt = require('jsonwebtoken')

module.exports.auth = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await userDomain.authenticate(username, password)

    const token = jwt.sign(user, process.env.SECRET_KEY, {
      expiresIn: '86400m'
    })
    const { iat, exp } = jwt.decode(token)
    res.json({ iat, exp, token })
  } catch (err) {
    res.status(400).json({ message: err })
  }
  next()
}

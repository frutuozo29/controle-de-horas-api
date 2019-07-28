const user = require('./user')

module.exports.assignRoutes = server => {
  server.use('/api/user', user)
}

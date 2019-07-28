const auth = require('./auth')
const user = require('./user')
const project = require('./project')
const appointment = require('./appointment')

module.exports.assignRoutes = server => {
  server.use('/api/auth', auth)
  server.use('/api/user', user)
  server.use('/api/project', project)
  server.use('/api/appointment', appointment)
}

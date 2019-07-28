const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('../routes')
const server = express()

// config server middlewares
server.use(cors())
server.use(bodyParser.json())

// config development
server.use(morgan('tiny'))

routes.assignRoutes(server)

module.exports = server

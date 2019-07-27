const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const server = express()

// config server middlewares
server.use(cors())
server.use(bodyParser.json())

// config development
server.use(morgan('tiny'))

// default route
server.use('/', (req, res, next) => {
  res.send({ env: process.env.NODE_ENV })
  next()
})

module.exports = server

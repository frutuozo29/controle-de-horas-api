const server = require('./src/server')

var port = process.env.PORT || 8000

server.listen(port, () => {
  console.log(`[SERVER] - Running on port ${port}`)
})

require('dotenv/config')
const server = require('./src/server')
const database = require('./src/database')

var port = process.env.PORT || 8000

database.createConnection()
  .then(() => {
    server.listen(port, () => {
      console.log(`[SERVER] - Running on port ${port}`)
    })
  })
  .catch((err) => {
    console.log(`[ERROR] - ${err}`)
  })

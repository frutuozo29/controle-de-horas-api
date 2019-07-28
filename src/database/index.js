const db = require('../database/models')

module.exports.createConnection = () => {
  return new Promise((resolve, reject) => {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('[DATABASE] - PostgreSql is connected')
        resolve(db)
      })
      .catch(err => {
        console.log('[DATABASE] - Error on PostgreSql connection')
        reject(err)
      })
  })
}

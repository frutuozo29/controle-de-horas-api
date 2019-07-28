const models = require('../../database/models')

module.exports.authenticate = async (user, password) => {
  try {
    const userbd = await this.readByUsername(user)
    if (userbd && userbd.password !== password) {
      throw new Error('Username or password is invalid')
    }

    return Promise.resolve({
      id: userbd.id,
      username: userbd.name,
      password: userbd.password
    })
  } catch (error) { }
}

module.exports.create = async user => {
  try {
    const newUser = {
      name: user.name,
      password: user.password
    }

    const response = await models.User.create(newUser)
    return response
  } catch (error) { }
}

module.exports.read = async () => models.User.findAll()

module.exports.readById = async id => models.User.findByPk(id)

module.exports.readByUsername = async username => models.User.findOne({ where: { name: username } })

module.exports.update = async (id, user) => models.User.update(user, { where: { id } })

module.exports.del = async id => models.User.destroy({ where: { id } })

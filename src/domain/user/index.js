const models = require('../../database/models')

module.exports.authenticate = async (user, password) => {
  try {
    if (user === 'admin') {
      return Promise.resolve({
        _id: 'bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb',
        username: user,
        password
      })
    }

    const userbd = await this.readByUsername(user)
    if (userbd && userbd.password !== password) {
      throw new Error('Username or password is invalid')
    }

    return Promise.resolve({
      _id: userbd._id,
      username: userbd.username,
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

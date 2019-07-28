const User = require('../../database/models').User

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

    const response = await User.create(newUser)
    return response
  } catch (error) { }
}

module.exports.read = async () => User.findAll()

module.exports.readById = async id => User.findByPk(id)

module.exports.readByUsername = async username => User.findOne({ where: { name: username } })

module.exports.update = async (id, user) => User.update(user, { where: { id } })

module.exports.del = async id => User.destroy({ where: { id } })

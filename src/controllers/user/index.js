const userDomain = require('../../domain/user')

module.exports.create = async (req, res, next) => {
  try {
    const user = await userDomain.create(req.body)
    res.json({ user })
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.read = async (req, res, next) => {
  try {
    const users = await userDomain.read()
    res.json(users)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.readById = async (req, res, next) => {
  try {
    const user = await userDomain.readById(req.params.id)
    res.json(user)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.update = async (req, res, next) => {
  try {
    const user = await userDomain.update(req.params.id, req.body)
    res.json(user)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.del = async (req, res, next) => {
  try {
    const usersDeleted = await userDomain.del(req.params.id)
    res.json({ usersDeleted })
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

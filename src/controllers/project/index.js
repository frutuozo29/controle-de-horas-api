const projectDomain = require('../../domain/project')

module.exports.create = async (req, res, next) => {
  try {
    const project = await projectDomain.create(req.body)
    res.json({ project })
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.read = async (req, res, next) => {
  try {
    const projects = await projectDomain.read(req.user.id)
    res.json(projects)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.readById = async (req, res, next) => {
  try {
    const project = await projectDomain.readById(req.params.id)
    res.json(project)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.update = async (req, res, next) => {
  try {
    const project = await projectDomain.update(req.params.id, req.body)
    res.json(project)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.del = async (req, res, next) => {
  try {
    const projectsDeleted = await projectDomain.del(req.params.id)
    res.json({ projectsDeleted })
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

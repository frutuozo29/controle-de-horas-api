const Project = require('../../database/models').Project

module.exports.create = async project => {
  try {
    const newProject = {
      name: project.name
    }

    const response = await Project.create(newProject)
    return response
  } catch (error) { }
}

module.exports.read = async () => Project.findAll()

module.exports.readById = async id => Project.findByPk(id)

module.exports.update = async (id, project) => Project.update(project, { where: { id } })

module.exports.del = async id => Project.destroy({ where: { id } })

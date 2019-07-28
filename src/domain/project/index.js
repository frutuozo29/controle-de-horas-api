const models = require('../../database/models')

module.exports.create = async project => {
  try {
    const newProject = {
      name: project.name
    }

    const response = await models.Project.create(newProject)
    return response
  } catch (error) { }
}

module.exports.read = async () => models.Project.findAll()

module.exports.readById = async id => models.Project.findByPk(id)

module.exports.update = async (id, project) => models.Project.update(project, { where: { id } })

module.exports.del = async id => models.Project.destroy({ where: { id } })

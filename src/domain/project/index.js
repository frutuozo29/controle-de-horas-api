const { Project, User } = require('../../database/models')

module.exports.create = async project => {
  try {
    const newProject = {
      name: project.name
    }

    const response = await Project.create(newProject)
    return response
  } catch (error) { }
}

module.exports.read = async (userId) => {
  const projects = await Project.findAll({
    include: [{
      model: User,
      through: { attributes: [] }
    }]
  })

  return projects
}

module.exports.readById = async id => Project.findByPk(id)

module.exports.update = async (id, project) => Project.update(project, { where: { id } })

module.exports.del = async id => Project.destroy({ where: { id } })

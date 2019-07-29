const db = require('../../database/models')
const { Project, ProjectUsers, Appointments } = require('../../database/models')

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
  const projectIds = await ProjectUsers.findAll({
    attributes: ['projectId'],
    raw: true,
    where: { userId }
  }).map(item => item.projectId)

  const appointments = await Appointments.findAll({
    attributes: ['projectId', [db.sequelize.fn('sum', db.sequelize.col('quantity')), 'quantity']],
    raw: true,
    where: {
      projectId: projectIds,
      userId
    },
    group: ['projectId']
  })

  let projects = await Project.findAll({
    raw: true,
    where: { id: projectIds }
  })

  projects = projects.map(project => ({ ...project, quantity: appointments.filter(app => app.projectId === project.id)[0].quantity || 0 }))

  return projects
}

module.exports.readById = async id => Project.findByPk(id)

module.exports.update = async (id, project) => Project.update(project, { where: { id } })

module.exports.del = async id => Project.destroy({ where: { id } })

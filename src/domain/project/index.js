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
    include: [{
      model: Project,
      attributes: ['name']
    }],
    attributes: ['projectId', [db.sequelize.fn('sum', db.sequelize.col('quantity')), 'quantity']],
    raw: true,
    where: {
      projectId: projectIds,
      userId
    },
    group: ['projectId', 'name']

  })

  const projects = await Project.findAll({
    raw: true,
    where: { id: projectIds }
  }).map(project => {
    const appointment = appointments.find(app => app.projectId === project.id)
    return { ...project, quantity: (appointment && appointment.quantity) || 0 }
  })

  return projects
}

module.exports.readById = async id => Project.findByPk(id)

module.exports.update = async (id, project) => Project.update(project, { where: { id } })

module.exports.del = async id => Project.destroy({ where: { id } })

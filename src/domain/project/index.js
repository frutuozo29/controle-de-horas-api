const { Project, ProjectUsers, User } = require('../../database/models')

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
  const projects = await Project.findAll()
  const projectUsers = ProjectUsers.findAll({ where: {userId}})

  const parsedProjectUser = JSON.stringify(projectUsers)
  console.log(parsedProjectUser)
  const idsProject = parsedProjectUser.map(parsed => parsed.projectId)
console.log(idsProject)

  const mapped = projects.map(project => {
    if (idsProject.include(project.id)) {
      return project
    }    
  })
  return mapped
}

module.exports.readById = async id => Project.findByPk(id)

module.exports.update = async (id, project) => Project.update(project, { where: { id } })

module.exports.del = async id => Project.destroy({ where: { id } })

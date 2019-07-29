module.exports = (sequelize, DataTypes) => {
  const ProjectUser = sequelize.define('ProjectUser', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    timestamps: false
  })

  ProjectUser.associate = models => {
    ProjectUser.belongsTo(models.User)
    ProjectUser.belongsTo(models.Project)
  }

  return ProjectUser
}

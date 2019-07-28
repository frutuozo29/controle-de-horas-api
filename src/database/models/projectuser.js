module.exports = (sequelize, DataTypes) => {
  const ProjectUser = sequelize.define('ProjectUser', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    timestamps: false
  })

  return ProjectUser
}

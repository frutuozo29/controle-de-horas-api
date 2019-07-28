module.exports = (sequelize, DataTypes) => {
  const ProjectUser = sequelize.define('ProjectUser', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    timestamps: false
  })

  return ProjectUser
}

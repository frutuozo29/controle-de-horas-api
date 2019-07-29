module.exports = (sequelize, DataTypes) => {
  const ProjectUsers = sequelize.define('ProjectUsers', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    timestamps: false
  })

  return ProjectUsers
}

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {
    timestamps: false
  })

  return Project
}

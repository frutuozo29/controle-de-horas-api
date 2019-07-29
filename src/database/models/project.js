module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {
    timestamps: false
  })

  Project.associate = models => {
    Project.belongsToMany(models.User, {
      through: 'ProjectUsers',
      foreignKey: 'projectId'
    })
  }

  return Project
}

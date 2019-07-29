module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: false
  })

  User.associate = models => {
    User.belongsToMany(models.Project, {
      through: 'ProjectUser',
      as: 'Projects',
      foreignKey: 'userId'
    })
  }

  return User
}

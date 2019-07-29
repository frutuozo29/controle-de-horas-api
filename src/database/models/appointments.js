module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    timestamps: false
  })

  Appointments.associate = models => {
    Appointments.hasOne(models.Project, {
      foreignKey: 'id',
      sourceKey: 'projectId'
    })
  }

  return Appointments
}

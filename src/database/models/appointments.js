module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    projectId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    timestamps: false
  })
  return Appointments
}

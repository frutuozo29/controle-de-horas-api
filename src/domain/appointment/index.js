const Appointment = require('../../database/models').Appointments

module.exports.create = async appointment => {
  try {
    const newAppointment = {
      userId: appointment.userId,
      projectId: appointment.projectId,
      quantity: appointment.quantity,
      date: appointment.date
    }

    const response = await Appointment.create(newAppointment)
    return response
  } catch (error) { }
}

module.exports.read = async () => Appointment.findAll()

module.exports.readById = async id => Appointment.findByPk(id)

module.exports.update = async (id, project) => Appointment.update(project, { where: { id } })

module.exports.del = async id => Appointment.destroy({ where: { id } })

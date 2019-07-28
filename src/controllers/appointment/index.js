const appointmentDomain = require('../../domain/appointment')

module.exports.create = async (req, res, next) => {
  try {
    const appointment = await appointmentDomain.create(req.body)
    res.json({ appointment })
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.read = async (req, res, next) => {
  try {
    const appointments = await appointmentDomain.read()
    res.json(appointments)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.readById = async (req, res, next) => {
  try {
    const appointment = await appointmentDomain.readById(req.params.id)
    res.json(appointment)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.update = async (req, res, next) => {
  try {
    const appointment = await appointmentDomain.update(req.params.id, req.body)
    res.json(appointment)
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

module.exports.del = async (req, res, next) => {
  try {
    const appointmentsDeleted = await appointmentDomain.del(req.params.id)
    res.json({ appointmentsDeleted })
  } catch (err) {
    res.json({ message: err.message })
  }
  next()
}

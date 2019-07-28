const express = require('express')
const router = express.Router()
const controller = require('../../controllers/appointment')

router.get('/', controller.read)
router.get('/:id', controller.readById)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.del)

module.exports = router

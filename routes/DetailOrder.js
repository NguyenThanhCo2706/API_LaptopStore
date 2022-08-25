const router = require('express').Router()
const detailOrderController = require('../controllers/DetailOrderController')
const MiddlewareUser = require('../middleware/MiddlewareUser')

router.get('/', detailOrderController.getOrderDetailAsync)
router.get('/view', MiddlewareUser.verifyTokenAndAdminUser, detailOrderController.viewDetailOrder)
router.post('/', detailOrderController.createDetailOrder)
router.put('/', detailOrderController.uppdateDetailOrder)
router.delete('/', detailOrderController.deleteDetailOrder)

module.exports = router
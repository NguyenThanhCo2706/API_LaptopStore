const router = require('express').Router()
const detailOrderController = require('../controllers/DetailOrderController')

router.get('/', detailOrderController.getOrderDetailAsync)
router.post('/', detailOrderController.createDetailOrder)
router.post('/orderid', detailOrderController.uppdateOrderId)
router.delete('/', detailOrderController.deleteDetailOrder)



module.exports = router
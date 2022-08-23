const router = require('express').Router()
const orderController = require('../controllers/OrderController')

router.get('/list', orderController.getAllOrder)
router.get('/comfirm', orderController.getOrderToComfirm)
router.put('/', orderController.comfirmOrder)
router.post('/', orderController.createOrder)


module.exports = router
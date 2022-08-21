const router = require('express').Router()
const orderController = require('../controllers/OrderController')

router.get('/list', orderController.getAllOrder)
router.get('/comfirm', orderController.getOrderToComfirm)
// router.get('/', orderController.createOrder)
router.post('/', orderController.comfirmOrder)
router.get('/init', orderController.createOrder)


module.exports = router
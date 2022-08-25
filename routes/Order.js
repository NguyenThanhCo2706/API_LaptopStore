const router = require('express').Router()
const orderController = require('../controllers/OrderController')
const MiddlewareUser = require('../middleware/MiddlewareUser')

router.get('/list', MiddlewareUser.verifyTokenAndAdminUser, orderController.getAllOrder)
router.get('/comfirm', MiddlewareUser.verifyTokenAndAdminUser, orderController.getOrderToComfirm)
router.put('/', MiddlewareUser.verifyTokenAndAdminUser, orderController.comfirmOrder)
router.post('/', MiddlewareUser.verifyTokenAndAdminUser, orderController.createOrder)


module.exports = router
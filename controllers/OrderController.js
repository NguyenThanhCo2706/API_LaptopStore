const Models = require('../models/OrderModel')
const orderController = {
    getAllOrder: Models.getAllOrder,
    getOrderToComfirm: Models.getOrderToComfirm,
    comfirmOrder: Models.comfirmOrder,
    createOrder: Models.createOrder,
}

module.exports = orderController
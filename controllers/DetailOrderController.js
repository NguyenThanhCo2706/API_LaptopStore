const Models = require('../models/DetailOrderModel')

const detailOrderController = {
    getOrderDetailAsync: Models.getOrderDetailAsync,
    viewDetailOrder: Models.viewDetailOrder,
    createDetailOrder: Models.createDetailOrder,
    uppdateOrderId: Models.uppdateOrderId,
    deleteDetailOrder: Models.deleteDetailOrder,
}

module.exports = detailOrderController
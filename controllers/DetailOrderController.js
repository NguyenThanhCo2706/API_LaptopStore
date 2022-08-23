const Models = require('../models/DetailOrderModel')

const detailOrderController = {
    getOrderDetailAsync: Models.getOrderDetailAsync,
    viewDetailOrder: Models.viewDetailOrder,
    createDetailOrder: Models.createDetailOrder,
    uppdateDetailOrder: Models.uppdateDetailOrder,
    deleteDetailOrder: Models.deleteDetailOrder,
}

module.exports = detailOrderController
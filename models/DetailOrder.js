const mongoose = require('mongoose')

const detailOrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: null
    },
    productId: {
        type: String
    },
    customer: {
        type: String
    },
    amount: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model("DetailOrder", detailOrderSchema)
const mongoose = require('mongoose')

const oderSchema = new mongoose.Schema({
    admin: {
        type: String,
        default: null
    },
    customer: {
        type: String,
        default: null
    },
    isComfirm: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Order", oderSchema)
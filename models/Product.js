const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    CPU: {
        type: String,
    },
    ram: {
        type: String,
    },
    hardDrive: {
        type: String,
    },
    card: {
        type: String,
    },
    operatingSystem: {
        type: String,
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)
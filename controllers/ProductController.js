const Models = require('../models/ProductModel')

const productController = {
    getAllProduct: Models.getAllProduct,
    getProductByName: Models.getProductByName,
    getProductByCategory: Models.getProductByCategory,
    getProduct: Models.getProduct,
    createProduct: Models.createProduct,
    updateProduct: Models.updateProduct,
    deleteProduct: Models.deleteProduct,
}

module.exports = productController
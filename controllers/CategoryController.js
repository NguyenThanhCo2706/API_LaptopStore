const Models = require('../models/CategoryModel')

const CategoryController = {
    getAllCategory: Models.getAllCategory,
    createCategory: Models.createCategory,
}

module.exports = CategoryController
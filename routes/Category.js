const router = require('express').Router()
const categoryController = require('../controllers/CategoryController')

router.get('/', categoryController.getAllCategory)
router.post('/', categoryController.createCategory)


module.exports = router
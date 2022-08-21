const router = require('express').Router()
const productController = require('../controllers/ProductController')
const middlewareUser = require('../middleware/MiddlewareUser')
const MiddlewareProduct = require('../middleware/MiddlewareProduct')

router.get('/list', productController.getAllProduct)
router.get('/search', productController.getProductByName)
router.get('/category', productController.getProductByCategory)
router.get('/', productController.getProduct)
router.post('/', middlewareUser.verifyToken, middlewareUser.verifyTokenAndAdminUser, MiddlewareProduct.handleUpload, productController.createProduct)
router.put('/', middlewareUser.verifyToken, middlewareUser.verifyTokenAndAdminUser, MiddlewareProduct.handleUpload, productController.updateProduct)
router.delete('/', middlewareUser.verifyToken, middlewareUser.verifyTokenAndAdminUser, productController.deleteProduct)



module.exports = router
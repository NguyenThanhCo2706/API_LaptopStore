const router = require('express').Router()
const detailOrderController = require('../controllers/DetailOrderController')

router.get('/', detailOrderController.getOrderDetailAsync)
router.get('/view', detailOrderController.viewDetailOrder)
router.post('/', detailOrderController.createDetailOrder)
router.put('/', detailOrderController.uppdateDetailOrder)
router.delete('/', detailOrderController.deleteDetailOrder)



module.exports = router
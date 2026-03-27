const productController = require('../apis/product/productController')

const express = require('express')
const router = express.Router();


router.post('/product/add', productController.add)

router.get('/product/all', productController.all)
router.post('/product/single', productController.single)




module.exports = router;
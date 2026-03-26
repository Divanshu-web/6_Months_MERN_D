const productController = require('../apis/product/productController')

const express = require('express')
const router = express.Router();


router.post('/product/add', productController.add)




module.exports = router;
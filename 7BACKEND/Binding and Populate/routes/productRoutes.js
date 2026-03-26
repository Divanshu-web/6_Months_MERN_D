const express = require('express');

const router = express.Router();
const ProductController = require('../controllers/productController')

router.get('/all', ProductController.getAllProducts)
router.get('/single/:id', ProductController.getSingleProduct)
router.post('/add', ProductController.addProductToDB)
router.post('/update/:id', ProductController.updateProduct)
router.post('/deleteSoft', ProductController.deleteSoft)

module.exports = router;
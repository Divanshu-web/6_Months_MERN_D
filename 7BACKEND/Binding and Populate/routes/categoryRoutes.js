const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController')

router.get('/all', categoryController.getAllCategory)
router.get('/single/:id', categoryController.getSingleCategory)
router.post('/add', categoryController.addCategoryToDB)
router.post('/update/:id', categoryController.updateCategory)
router.post('/deleteSoft', categoryController.deleteSoft)

module.exports = router;
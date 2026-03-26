const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')

router.get('/all', userController.getAllUser)
router.get('/single/:id', userController.getSingleUser)
router.post('/add', userController.addUserToDB)
router.post('/update/:id', userController.updateUser)
router.post('/deleteSoft', userController.deleteSoft)

module.exports = router;
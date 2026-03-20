const express = require('express');

const router = express.Router();

const UserControllers = require('../controllers/userController')

router.get('/all', UserControllers.getAllUsers)
router.post('/add', UserControllers.addUser)
router.get('/search',UserControllers.searchUsers)
router.get('/fetch/:id', UserControllers.fetchSingleUser)

router.get('/addToDB', UserControllers.addUserToDB)



module.exports = router;  

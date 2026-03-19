const express = require('express');

const router = express.Router();

const UserControllers = require('../controllers/userController')

router.get('/all', UserControllers.getAllUsers)
router.post('/add', UserControllers.addUser)
router.get('/:id', UserControllers.fetchSingleUser)
router.get("/search",UserControllers.searchUsers);


module.exports = router;
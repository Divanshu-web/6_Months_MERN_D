const express = require('express');

const router = express.Router();

const chatController = require('../controllers/chatController')

router.get('/all', chatController.getAllChat)
router.get('/single/:id', chatController.getSingleChat)
router.post('/add', chatController.addChatToDB)
router.post('/update/:id', chatController.updateChat)
router.post('/deleteSoft', chatController.deleteSoft)

module.exports = router;

const router = require('express').Router()
const chatController = require('../apis/chat/chatController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})


router.post('/add', chatController.addChatToDB)
router.post('/all', chatController.getAllChat)
router.post('/single', chatController.getSingleChat)
// router.post('/update', chatController.updateChat)
// router.post('/deleteSoft', chatController.deleteSoft)


module.exports = router;

const router = require('express').Router()
const learnerMentorController = require('../apis/learnerMentor/learnerMentorController')
const userController = require('../apis/user/userController')
router.get('/', (req, res)=>{
    res.send("Welcom")
})

router.post('/register', learnerMentorController.register)
router.post('/login', userController.login);



module.exports = router;
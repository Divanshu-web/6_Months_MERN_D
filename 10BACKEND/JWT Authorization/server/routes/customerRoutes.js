
const router = require('express').Router()
const customerController = require('../apis/customer/customerController')
const userController = require('../apis/user/userController')
router.get('/', (req, res)=>{
    res.send("Welcom")
})

router.post('/register', customerController.register)
router.post('/login', userController.login);

router.all(/(.*)/, (req, res)=>{
    res.json({
        status: 404,
        success: false,
        message: "Invalid address"
    })
})



module.exports = router;
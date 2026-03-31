
const router = require('express').Router()
const customerController = require('../apis/customer/customerController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})

router.post('/register', customerController.register)



module.exports = router;

const router = require('express').Router()
const trainerController = require('../apis/trainer/tranerController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})

router.post('/register', trainerController.register)



module.exports = router;
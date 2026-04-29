
const router = require('express').Router()
const requestController = require('../apis/request/requestController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})


router.post('/add', requestController.addRequestToDB)
router.post('/all', requestController.getAllRequest)
router.post('/single', requestController.getSingleRequest)
router.post('/update', requestController.updateRequest)
router.post('/deleteSoft', requestController.deleteSoft)


module.exports = router;
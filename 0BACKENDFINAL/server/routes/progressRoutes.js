
const router = require('express').Router()
const progressController = require('../apis/progress/progressController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})


router.post('/add', progressController.addProgressToDB)
router.get('/all', progressController.getAllProgress)
router.get('/single', progressController.getSingleProgress)
router.post('/update', progressController.updateProgress)
router.post('/deleteSoft', progressController.deleteSoft)


module.exports = router;
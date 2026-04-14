
const router = require('express').Router()
const reviewController = require('../apis/review/reviewController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})


router.post('/add', reviewController.addReviewToDB)
router.get('/all', reviewController.getAllReview)
router.get('/single', reviewController.getSingleReview)
router.post('/update', reviewController.updateReview)
router.post('/deleteSoft', reviewController.deleteSoft)


module.exports = router;
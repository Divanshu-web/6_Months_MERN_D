
const router = require('express').Router()
const paymentController = require('../apis/payment/paymentController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})


router.post('/add', paymentController.addPaymentToDB)
router.get('/all', paymentController.getAllPayment)
router.get('/single', paymentController.getSinglePayment)
router.post('/update', paymentController.updatePayment)
router.post('/deleteSoft', paymentController.deleteSoft)


module.exports = router;
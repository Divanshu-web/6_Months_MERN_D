
const router = require('express').Router()
const userController = require('../apis/user/userController')
// const productController = require('../apis/product/productController')

const aiController = require('../apis/ai/aiController')
const mailController = require('../apis/mail/mailController')
const paymentController = require('../apis/paymentrazorpay/paymentController1')



router.get('/', (req, res)=>{
    res.send("Welcom")
})


router.post("/genAi", aiController.main)
router.post("/sendMail", mailController.mail)


router.post('/login', userController.login);

router.post("/create-order", paymentController.createOrder)




// router.post('/product/add', productController.add)
// router.post('/product/all', productController.all)
// router.post('/product/single', productController.single)
// router.post('/product/update', productController.update)


module.exports = router;
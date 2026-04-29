const router = require("express").Router()
const multer = require("multer")
const storage = multer.memoryStorage();
const fileUpload = multer({ storage });
const customerController = require("../apis/cutomer/customerController")
const userController = require('../apis/user/userController')
const genAiController = require('../apis/genAi/genAiController')
const mailController = require('../apis/mail/mailController')

// User Routes
router.post("/login", userController.login)

router.post("/register", fileUpload.single('profile'), customerController.register)


router.post("/genAi", genAiController.main)
router.post("/sendMail", mailController.mail)

// router.use(require("../middleware/tokenChecker"))



// wildcard route
router.all(/(.*)/, (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router
const router = require("express").Router()
const multer = require("multer")
const storage = multer.memoryStorage();
const fileUpload = multer({ storage });
const customerController = require("../apis/cutomer/customerController")
const userController = require('../apis/user/userController')
const aiController = require('../apis/ai/aiController')


// User Routes
router.post("/login", userController.login)
router.post("/genAi", aiController.main)

router.post("/register", fileUpload.single('profile'), customerController.register)


router.use(require("../middleware/tokenChecker"))
router.post("/changePassword", userController.changePassword)




// wildcard route
router.all(/(.*)/, (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router
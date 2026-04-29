const router = require("express").Router()
const multer = require("multer")
const storage = multer.memoryStorage();
const fileUpload = multer({ storage });
const customerController = require("../apis/cutomer/customerController")
const userController = require('../apis/user/userController')

// User Routes
router.post("/login", userController.login)

router.post("/register", fileUpload.single('profile'), customerController.register)


router.use(require("../middleware/tokenChecker"))



// wildcard route
router.all(/(.*)/, (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router
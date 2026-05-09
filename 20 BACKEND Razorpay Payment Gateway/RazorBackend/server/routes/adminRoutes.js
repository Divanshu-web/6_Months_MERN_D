const router = require("express").Router()
const multer = require("multer")
const storage = multer.memoryStorage();
const fileUpload = multer({ storage });
const categoryController = require("../apis/category/categoryController")
const productController = require('../apis/product/productController')
const userController = require('../apis/user/userController')


// User Routes
router.post("/login", userController.login)

// router.use(require("../middleware/tokenChecker"))

router.post("/category/add", fileUpload.single('image'), categoryController.add)
router.post("/category/update", fileUpload.single('image'), categoryController.update)
router.post("/category/all", categoryController.all)
router.post("/category/single", categoryController.single)
router.post("/category/delete", categoryController.hardDelete)
router.post("/category/softDelete", categoryController.softDelete)


// Products Routes
router.post("/product/add", productController.add)
router.post("/product/all", productController.all)
router.post("/product/single", productController.single)

// wildcard route
router.all(/(.*)/, (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router

const router = require('express').Router()
const userController = require('../apis/user/userController')
const productController = require('../apis/product/productController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})

// PUBLIC ROUTES
router.post('/product/all', productController.all)
router.post('/product/single', productController.single)
router.post('/login', userController.login);


router.use(require('../middleware/tokenChecker'))


// PRIVATE ROUTES (TOKEN REQUIRED)
router.post('/product/add', productController.add)

router.post('/product/update', productController.update)


// wildcard routes

router.all(/(.*)/, (req, res)=>{
    res.json({
        status: 404,
        success: false,
        message: "Invalid address"
    })
})

module.exports = router;
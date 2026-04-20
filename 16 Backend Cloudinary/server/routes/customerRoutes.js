
const router = require('express').Router()
const multer= require('multer')
const customerController = require('../apis/customer/customerController')
const userController = require('../apis/user/userController')
router.get('/', (req, res)=>{
    res.send("Welcom")
})


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/public/customer')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  } 
})


const cloudStorage = multer.memoryStorage() // stores the file in RAM  - req.file.buffer



// const upload = multer({ storage: storage })
const cloudUpload = multer({ storage: cloudStorage })

// router.post('/register', upload.single('profile'), customerController.register)
router.post('/register', cloudUpload.single('profile'), customerController.register)


router.post('/login', userController.login);

router.all(/(.*)/, (req, res)=>{
    res.json({
        status: 404,
        success: false,
        message: "Invalid address"
    })
})



module.exports = router;
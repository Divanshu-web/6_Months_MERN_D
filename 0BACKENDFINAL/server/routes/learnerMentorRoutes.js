const multer= require('multer')
const router = require('express').Router()
const learnerMentorController = require('../apis/learnerMentor/learnerMentorController')
const userController = require('../apis/user/userController')
router.get('/', (req, res)=>{
    res.send("Welcom")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/public/learnerMentor')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const cloudStorage = multer.memoryStorage() // stores the file in RAM  - req.file.buffer

// const upload = multer({ storage: storage })
const cloudUpload = multer({ storage: cloudStorage })


// router.post('/register', upload.single('profileImage') , learnerMentorController.register)
router.post('/register', cloudUpload.single('profileImage'), learnerMentorController.register)



router.post('/login', userController.login);

router.use(require('../middleware/tokenChecker'))


router.get('/all', learnerMentorController.getAllLearnerMentor)
router.get('/single', learnerMentorController.getSingleLearnerMentor)
router.post('/update', cloudUpload.single('profileImage'), learnerMentorController.updateLearnerMentor)
router.post('/deleteSoft', learnerMentorController.deleteSoft)


module.exports = router;
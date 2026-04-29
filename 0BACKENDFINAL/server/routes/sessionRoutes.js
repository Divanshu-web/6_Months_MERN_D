const multer = require('multer')
const router = require('express').Router()
const sessionController = require('../apis/session/sessionController')
// const userController = require('../apis/user/userController')
router.get('/', (req, res) => {
  res.send("Welcom")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/public/session')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

// router.post('/register', upload.single('profileImage') , learnerMentorController.register)

// router.post('/login', userController.login);


router.post('/add', upload.single("thumbnail"), sessionController.addSessionToDB)
router.post('/all', sessionController.getAllSession)
router.post('/single', sessionController.getSingleSession)
router.post('/update', upload.single('profileImage'), sessionController.updateSession)
router.post('/deleteSoft', sessionController.deleteSoft)


module.exports = router;
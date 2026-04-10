const multer= require('multer')
const router = require('express').Router()
const skillController = require('../apis/skill/skillController')
// const userController = require('../apis/user/userController')
router.get('/', (req, res)=>{
    res.send("Welcom")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/public/skill')
  },        
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

// router.post('/register', upload.single('profileImage') , learnerMentorController.register)

// router.post('/login', userController.login);


router.post('/add', skillController.addSkillToDB)
router.get('/all', skillController.getAllSkill)
router.get('/single', skillController.getSingleskill)
router.post('/update', upload.single('profileImage'), skillController.updateskill)
router.post('/deleteSoft', skillController.deleteSoft)


module.exports = router;
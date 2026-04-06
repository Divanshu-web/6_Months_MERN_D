
const router = require('express').Router()
// const userController = require('../apis/user/userController')
const taskController = require('../apis/task/taskController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})


// router.post('/login', userController.login);



router.post('/task/add', taskController.add)
router.post('/task/all', taskController.all)
router.post('/task/update', taskController.update)
router.post('/task/delete', taskController.softDelete)


module.exports = router;
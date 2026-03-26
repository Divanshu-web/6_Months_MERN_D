const express = require('express');

const router = express.Router();

const skillController = require('../controllers/skillController')

router.get('/all', skillController.getAllSkill)
router.get('/single/:id', skillController.getSingleSkill)
router.post('/add', skillController.addSkillToDB)
router.post('/update/:id', skillController.updateSkill)
router.post('/deleteSoft', skillController.deleteSoft)

module.exports = router;
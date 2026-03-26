const express = require('express');

const router = express.Router();

const trainerController = require('../controllers/trainerController')

router.get('/all', trainerController.getAllTrainer)
router.get('/single/:id', trainerController.getSingleTrainer)
router.post('/add', trainerController.addTrainerToDB)
router.post('/update/:id', trainerController.updateTrainer)
router.post('/deleteSoft', trainerController.deleteSoft)

module.exports = router;
const express = require('express');

const router = express.Router();

const MovieController = require('../controllers/movieController')

router.get('/all', MovieController.getAllMovies)
router.get('/single/:id', MovieController.getSingleMovie)
router.post('/add', MovieController.addMovie)
router.post('/addToDB', MovieController.addMovieToDB)
router.post('/update/:id', MovieController.updateMovie)

module.exports = router;
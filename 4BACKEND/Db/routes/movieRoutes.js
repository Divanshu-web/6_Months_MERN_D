const express = require('express');

const router = express.Router();

const MovieController = require('../controllers/movieController')

router.get('/all', MovieController.getAllMovies)
router.post('/add', MovieController.addMovie)
router.get('/addToDB', MovieController.addMovieToDB)

module.exports = router;
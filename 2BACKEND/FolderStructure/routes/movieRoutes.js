const express = require('express');

const router = express.Router();

const MovieController = require('../controllers/movieController')

router.get('/all', MovieController.getAllMovies)
router.post('/add', MovieController.addMovie)

module.exports = router;
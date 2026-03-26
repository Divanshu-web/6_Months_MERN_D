const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  autoId: {type: Number, default :0},
  title: {type: String, default: "Div"}, 
  genre: String,
  year : String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
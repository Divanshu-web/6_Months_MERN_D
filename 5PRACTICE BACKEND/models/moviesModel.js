// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010},
//   { id: 2, title: "The Dark Knight", genre: "Action", year: 2008},
//   { id: 3, title: "Interstellar", genre: "Sci-Fi", year: 2014},
//   { id: 4, title: "The Godfather", genre: "Crime", year: 1972},
//   { id: 5, title: "Avengers: Endgame", genre: "Action", year: 2019},
//   { id: 6, title: "Parasite", genre: "Thriller", year: 2019}
// ]; 

// module.exports = movies; 


const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {type: String, default: "Div"}, 
  genre: String,
  year : String
});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
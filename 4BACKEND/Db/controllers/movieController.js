const movies = require('../models/moviesModel')

const getAllMovies = (req, res)=>{
  res.json({
    status: 200,
    success: true,
    message:"Movies fetched",
    data: movies
  })
}

const addMovie = (req, res)=>{
  const incomingData = req.body;

  if(!incomingData.title || !incomingData.genre || !incomingData.year){
    return res.json({
      status: 400, 
      success: false,
      message: "Incomplete data"
    })
  }

  const movie = {
    id: movies.length + 1,
    title: incomingData.title,
    genre: incomingData.genre,
    year: incomingData.year
  }

  movies.push(movie);

  res.json({
    status: 200,
    success: true,
    message: "Movie saved successfully",
    data : movie
  })
}


const addMovieToDB = async (req, res) => {
  const movie = new movies({
    // title : "Toxic",
    genre : "Action",
    year: 2026
  })

  await movie.save();
  res.send("Data saved");
}


module.exports = {
    getAllMovies,
    addMovie,
    addMovieToDB
}
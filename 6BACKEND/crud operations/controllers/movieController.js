const movies = require('../models/moviesModel')

// const getAllMovies = (req, res)=>{
//   res.json({
//     status: 200,
//     success: true,
//     message:"Movies fetched",
//     data: movies
//   })
// }

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


// TO CREATE A MOVIE
const addMovieToDB =  async (req, res) => {
  try{
    const incomingData = req.body || {};
    const {title, year, genre} = incomingData;
    const totalDocs = await movies.countDocuments({});

    const moviedata = new movies({
      autoId: totalDocs + 1,
      title,
      year,
      genre
    });

    await moviedata.save()

    res.json({
      status: 201,
      success: true,
      message: "Movie Created",
      data: moviedata
    })

  }catch(err){
    res.json({
      status: 500,
      success: false,
      message: err.message || "Internal Server Error"
    })
  }
}

// TO GET ALL MOVIES
const getAllMovies = async (req, res) =>{
  const dbData = await movies.find();
  const totalDocs = await movies.countDocuments({});
  res.json({
    status: 200,
    total: totalDocs,
    success: true,
    message: "Movies fetched",
    data: dbData
  })
}


// TO GET SINGLE MOVIE
const getSingleMovie = async (req, res) => {
  const movieId = req.params.id;
  const movie = await movies.find({_id: movieId});

  res.json({
     status: 200,
    success: true,
    message: "Movie fetched",
    data: movie
  })
}


// UPDATE
const updateMovie = async (req, res) => {
  const movieId = req.params.id;
  const incomingData = req.body;
  const updatedMovie = await movies.findByIdAndUpdate(movieId, incomingData, {new: true});

  res.json({
    success: true,
    message: "Data Updated",
    data: updatedMovie
  })
}

module.exports = {
    getAllMovies,
    addMovie,
    addMovieToDB,
    getSingleMovie,
    updateMovie
}
const express = require('express');
const app = express();

//middleware to parse json data, otherwise req.body is undefined
app.use(express.json());
app.use(express.urlencoded());

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010},
  { id: 2, title: "The Dark Knight", genre: "Action", year: 2008},
  { id: 3, title: "Interstellar", genre: "Sci-Fi", year: 2014},
  { id: 4, title: "The Godfather", genre: "Crime", year: 1972},
  { id: 5, title: "Avengers: Endgame", genre: "Action", year: 2019},
  { id: 6, title: "Parasite", genre: "Thriller", year: 2019}
];

app.get('/movies/all', (req, res)=>{
  res.json({
    status: 200,
    success: true,
    message:"Movies fetched",
    data: movies
  })
})

app.post('/movie/add', (req, res)=>{
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
})

app.get('/',(req,res)=>{
    res.status(200).send('Server is running');
})

app.listen(3000,(req,res)=>{
    console.log('server is running');
})
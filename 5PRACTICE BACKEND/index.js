const express = require('express');
const app = express();

//middleware to parse json data, otherwise req.body is undefined
app.use(express.json());
app.use(express.urlencoded());


const logger = require('./middlewares/logger')
app.use(logger);



const MovieRoutes = require('./routes/moviesRoutes')
app.use('/movies', MovieRoutes);




app.get('/',(req,res)=>{
    res.status(200).send('Server is running');
})

app.listen(3000,()=>{
    console.log('server is running');
})
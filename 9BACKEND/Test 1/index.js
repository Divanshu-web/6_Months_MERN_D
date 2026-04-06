const express = require('express');
const app = express();

const seed = require('./server/config/seeder')
seed();

// body - parser for req.body
app.use(express.urlencoded());

// connection to DB
const connectDb = require('./server/config/db')
connectDb()

// default route
app.get('/task', (req, res)=>{
    res.send("Welcome to server")
})

// for app listening
app.listen(3000, ()=>{
    console.log("I am listening to port 3000");
})


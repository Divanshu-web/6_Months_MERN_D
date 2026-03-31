const express = require('express');
const app = express();


// body - parser for req.body
app.use(express.urlencoded());

// connection to DB
const connectDb = require('./server/config/db')
connectDb()

// routes import
const apiRoutes = require('./server/routes/apiRoutes')
app.use('/api', apiRoutes);


// default route
app.get('/', (req, res)=>{
    res.send("Welcome to server")
})

// for app listening
app.listen(3000, ()=>{
    console.log("I am listening to port 3000");
})


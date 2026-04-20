const express = require('express');
const app = express();


const cors = require('cors')
app.use(cors());


app.use(express.static('server/public'))

require('dotenv').config() // .env -> process.env

const port = process.env.PORT
console.log("PORT: ", process.env.PORT);
console.log("DB: ", process.env.DB_KEY);

const seed = require('./server/config/seeder')
seed();

// body - parser for req.body
app.use(express.json())
app.use(express.urlencoded());

// connection to DB
const connectDb = require('./server/config/db')
connectDb()

// routes import
const apiRoutes = require('./server/routes/apiRoutes')
app.use('/api', apiRoutes);

const customerRoutes = require('./server/routes/customerRoutes')
app.use('/customer', customerRoutes);

// default route
app.get('/', (req, res)=>{
    res.send("Welcome to server")
})

// for app listening
app.listen(port,  ()=>{
    console.log("I am listening to port: ", port);
})


// authentication - who i am
// authorization - what can i do 


// jwt - json web token
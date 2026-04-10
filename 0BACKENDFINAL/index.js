const express = require('express');
const app = express();

const seed = require('./server/config/seeder')
seed();

// body - parser for req.body
app.use(express.urlencoded());
app.use(express.json());

// connection to DB
const connectDb = require('./server/config/db')
connectDb()

// routes import
const apiRoutes = require('./server/routes/apiRoutes')
app.use('/api', apiRoutes);

const learnerMentorRoutes = require('./server/routes/learnerMentorRoutes')
app.use('/learnerMentor', learnerMentorRoutes);

const skillRoutes = require('./server/routes/skillRoutes')
app.use('/skill', skillRoutes);

// default route
app.get('/', (req, res)=>{
    res.send("Welcome to server")
})

// for app listening
app.listen(3000, ()=>{
    console.log("I am listening to port 3000");
})


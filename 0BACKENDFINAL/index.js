const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors());


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

const sessionRoutes = require('./server/routes/sessionRoutes')
app.use('/session', sessionRoutes);

const requestRoutes = require('./server/routes/requestRoutes')
app.use('/request', requestRoutes);

const chatRoutes = require('./server/routes/chatRoutes')
app.use('/chat', chatRoutes);

const progressRoutes = require('./server/routes/progressRoutes')
app.use('/progress', progressRoutes);

const reviewRoutes = require('./server/routes/reviewRoutes')
app.use('/review', reviewRoutes);

const paymentRoutes = require('./server/routes/paymentRoutes')
app.use('/payment', paymentRoutes);

// default route
app.get('/', (req, res) => {
    res.send("Welcome to server")
})

// for app listening
app.listen(3000, () => {
    console.log("I am listening to port 3000");
})


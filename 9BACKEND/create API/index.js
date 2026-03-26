const express = require('express');
const app = express();
const connectDb = require('./server/config/db')
connectDb();

app.use(express.urlencoded());

const apiRoutes = require('./server/routes/apiRoutes')

app.use('/api', apiRoutes);

app.get('/', (req, res)=>{
    res.send("Welcome to Server!!")
})



app.listen(3000, ()=>{
    console.log("I am listening to port 3000");
})
const express = require('express');
const app = express();
const connectDB = require('./config/db');



//middleware to parse json data, otherwise re.body is undefined
app.use(express.json());
app.use(express.urlencoded());

// connectDB();


const logger = require('./middlewares/logger')
app.use(logger);


const UserRoutes = require('./routes/userRoutes');
app.use('/user', UserRoutes);


app.get('/',(req,res)=>{
    res.status(200).send('Server is running');
})

app.listen(4000,()=>{
    console.log('server is running');
})
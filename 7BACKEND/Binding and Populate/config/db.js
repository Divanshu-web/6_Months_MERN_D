const mongoose = require('mongoose')

const connectDB = () =>  {
    try{
        mongoose.connect('mongodb://localhost:27017/7BACKEND');
        console.log("DB connected successfully!!");
    }
    catch(err){
        console.log("Error Connecting DB: ", err)
    }
}

module.exports = connectDB;
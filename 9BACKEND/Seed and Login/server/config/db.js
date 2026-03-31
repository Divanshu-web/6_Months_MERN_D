const mongoose = require('mongoose');


const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/09BACKEND')
        console.log("DB Connected")
    }catch(err){
        console.log("Error Connecting DB: ", err);
        
    }
}

module.exports = connectDb
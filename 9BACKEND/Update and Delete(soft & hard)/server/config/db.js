const mongoose = require('mongoose');


const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb+srv://MOHIT-O7:mohit-o7@task-app.d4bte.mongodb.net/batch')
        console.log("DB Connected")
    }catch(err){
        console.log("Error Connecting DB: ", err);
        
    }
}

module.exports = connectDb
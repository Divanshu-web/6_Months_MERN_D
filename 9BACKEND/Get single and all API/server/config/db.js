const mongoose = require('mongoose');

const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb+srv://MOHIT-O7:mohit-o7@task-app.d4bte.mongodb.net/batch');
        console.log("DB CONNECTED");
    }catch(err){
        console.log("ERROR connecting DB: ", err)
    }
}

module.exports = connectDb;
const mongoose = require('mongoose')

const connectDB = async () =>  {
    try{
        await mongoose.connect('mongodb://DIVANSHU:DIVANSHU1234@projects.3acrp3d.mongodb.net/dibanshu?appName=PROJECTS');
        
        console.log("DB connected successfully!!");
    }
    catch(err){
        console.log("Error Connecting DB: ", err)
    }
}

module.exports = connectDB;
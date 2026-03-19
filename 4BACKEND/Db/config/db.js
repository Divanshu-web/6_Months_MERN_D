const mongoose = require('mongoose')

const connectDB = () =>  {
    try{
        mongoose.connect('mongodb+srv://garvsharma:%40garv5670%3F@braingames.wslv1c1.mongodb.net/movies?appName=BrainGames');
        
        console.log("DB connected successfully!!");
    }
    catch(err){
        console.log("Error Connecting DB: ", err)
    }
}

module.exports = connectDB;
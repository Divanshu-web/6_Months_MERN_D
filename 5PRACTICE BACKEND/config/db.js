


const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/MOVIES");

        console.log("✅ DB connected successfully!!");
    } catch (err) {
        console.log("❌ Error Connecting DB: ", err);
    }
}

module.exports = connectDB;
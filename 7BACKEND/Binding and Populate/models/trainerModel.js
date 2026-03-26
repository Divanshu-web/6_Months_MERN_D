const mongoose = require('mongoose');
const { Schema } = mongoose;

const trainerSchema = new Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "", required: true },
    email: { type: String, default: "", required: true },
    profileImage : { type: String, default: ""},
    chats : { type: String, default: ""},
    userType : {type: Number , default: 3},
    skills :  {type : String, default: ""},
    experience : {type : String, default: ""},
    
    isDelete: {type: Boolean, default: false},
    isBlock :  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('trainer', trainerSchema);
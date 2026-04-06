const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    // autoId: { type: Number, default: 0 },
    name: { type: String, default: "", required: true },
    email: { type: String, default: "", required: true },
    password : { type: String, default: ""},
    // chats : { type: String, default: ""},
    userType : {type: Number , default: 2},
    
    isDelete: {type: Boolean, default: false},
    isBlock :  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('user', userSchema);
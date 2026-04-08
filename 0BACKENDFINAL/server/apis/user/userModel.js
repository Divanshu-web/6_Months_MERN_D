const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    autoId:{type: Number, default: 0},
    name: {type: String, default: ""},
    email: {type: String, default: ""},
    phone: {type: Number, default: 0},
    password: {type: String, default: ""},
    userType: {type: Number, default: 2}, // 1 = Admin, 2 = Customer


    isDelete: {type: Boolean, default: false},
    isBlock:  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: null}
})

module.exports = mongoose.model('user', userSchema )
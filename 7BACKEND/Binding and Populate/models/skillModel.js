const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
    autoId: { type: Number, default: 0 },
    skillName: { type: String, default: "", required: true },
    category: { type: String, default: ""},
    trainer: { type: String, default: ""},
    user: { type: String, default: ""},
    duration: { type: String, default: ""},
    start: { type: String, default: ""},
    end : {type : String, default: ""},
    
    isDelete: {type: Boolean, default: false},
    isBlock :  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('skill', skillSchema);
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    autoId:{type: Number, default: 0},
    skillName: { type: String, default: "" },
    thumbnail: { type: String, default: "" },
    status: { type: Number, default:1 }, // 1= pending,2=complete,

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('skill', skillSchema)
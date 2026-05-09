const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    autoId:{type: Number, default: 0},
    mentorId:{type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor'},
    sessionId:{type: mongoose.Schema.Types.ObjectId, ref: 'session'},
    learnerId:{type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor'},
    date : { type: Date, default: null }, // Updated to proper Date type
    paymentStatus: { type: Number, default:1 }, // 1 = pending, 2 = confirm, 3 = rejected
    requestStatus: { type: Number, default:1 }, // 1 = pending, 2 = confirm, 3 = rejected
    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false }
}, { timestamps: true }) // Added built-in timestamps (createdAt, updatedAt)

module.exports = mongoose.model('request', requestSchema)
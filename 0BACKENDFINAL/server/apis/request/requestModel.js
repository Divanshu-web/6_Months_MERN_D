const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    autoId:{type: Number, default: 0},
    mentorId:{type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor'},
    sessionId:{type: mongoose.Schema.Types.ObjectId, ref: 'session'},
    learnerId:{type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor'},
    dateSlot : { type: Date, default: "null" },
    paymentStatus: { type: Number, default:1 }, // 1= pending, 2 = confirm ,3 = rejected
    requestStatus: { type: Number, default:1 }, // 1= pending, 2 = confirm ,3 = rejected

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('request', requestSchema)
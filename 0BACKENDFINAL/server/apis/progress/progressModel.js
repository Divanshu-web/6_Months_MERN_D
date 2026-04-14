const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'session' },
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor' },
    learnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor' },
    percentage: { type: Number, default: 0 },
    remarks: { type: Number, default: 0 },
    

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('progress', progressSchema)
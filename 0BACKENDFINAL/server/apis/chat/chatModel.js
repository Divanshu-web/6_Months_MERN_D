const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'request' },
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor' },
    learnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor' },
    message: {
        senderId: {type: mongoose.Schema.Types.ObjectId, ref:'learnerMentor'},
        content: String,
        isSeen: Boolean,
        status: Boolean,
        createdAt: Date,
    },

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('chat', chatSchema)
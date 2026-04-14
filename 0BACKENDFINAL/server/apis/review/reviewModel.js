const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'request' },
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor' },
    learnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor' },
    rating: { type: Number, default: 0 },
    comment: { type: String, default: ""},
    

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('review', reviewSchema)
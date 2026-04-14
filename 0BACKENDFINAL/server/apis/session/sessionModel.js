const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 }, 
    sessionName: { type: String, default: "" },
    skillId: { type: mongoose.Schema.Types.ObjectId, ref: 'skill' },
    sessionDate:{ type:Date , defaulut:"null" },
    descryption: { type: String, default: "" },
    price: { type: Number, default: 0 },
    thumbnail: { type: String, default: "" },

    learnerMentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'learnerMentor' },

    duration: { type: Number, default: 0 },
    sessionType: { type: String, default: "" },
    meetingLink: { type: String, default: "" },
    youtubeLink: { type: Number, default: 0 },
    isPaid: { type: Boolean, default: "" },

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('session', sessionSchema)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const learnerMentorSchema = new Schema({
    autoId: { type: Number, default: 0 },
    profileImage : { type: String, default: ""},
    userId : {type: mongoose.Schema.Types.ObjectId, default: null , ref: "user"},
    skills :  {type : String, default: ""},
    experience : {type : String, default: ""},
    contact : {type : Number, default: ""},
    profession : {type : Number, default: ""},
    
    isDelete: {type: Boolean, default: false},
    isBlock :  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('learnerMentor', learnerMentorSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
    autoId: { type: Number, default: 0 },
    user: { type: String, default: "", required: true },
    trainer: { type: String, default: "", required: true},
    chat: { type: String, default: ""},
    
    isDelete: {type: Boolean, default: false},
    isBlock :  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('chat', chatSchema);
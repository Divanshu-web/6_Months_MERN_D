const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: { type: String, default:"" },
    descryption: { type: String, default: ""},
    status: { type: String, default: ""},
    dueDate: {type: Date, default: Date.now()},
    
    isDelete: {type: Boolean, default: false},
    isBlock :  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('task', taskSchema);
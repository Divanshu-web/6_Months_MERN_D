const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    description: {type: Number, default: 0},
    status: {type: Number, default: 0},
    dueDate: {type: Date, default: Date.now()},
    

    isDelete: {type: Boolean, default: false},
    isBlock:  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: null}
})

module.exports = mongoose.model('tasks', taskSchema )
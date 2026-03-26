const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "", required: true },

    isDelete: {type: Boolean, default: false},
    isBlock :  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
});

module.exports = mongoose.model('category', categorySchema);
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: Number, default: 0 },
    address: { type: String, default: "" },
    gender: { type: String, default: "" },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('customer', customerSchema)
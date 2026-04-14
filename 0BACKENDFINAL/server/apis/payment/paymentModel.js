const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'request' },
    amount: { type: Number, default: 0 },
    paymentMethod: { type: Boolean, default: 1},
    transactionId: { type: String, default: ""},
    paymentStatus: { type: Boolean, default: 1},
    

    isDelete: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null }
})

module.exports = mongoose.model('payment', paymentSchema)
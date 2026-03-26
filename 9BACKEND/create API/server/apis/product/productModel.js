const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type: String, default: ""},
    price: {type: Number, default: 0},
    description: {type: String, default: ""},
    stock: {type: Number, default: 0},

    isDelete: {type: Boolean, default: false},
    isBlocked: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('product', productSchema);
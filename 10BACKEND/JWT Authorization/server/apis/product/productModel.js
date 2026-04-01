const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, default: ""},
    price: {type: Number, default: 0},
    stock: {type: Number, default: 0},
    

    isDelete: {type: Boolean, default: false},
    isBlock:  {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: null}

})

module.exports = mongoose.model('product', productSchema )
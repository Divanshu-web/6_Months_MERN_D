const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "", required: true },
    price: { type: Number, default: 0, required: true },
    description: { type: String, default: "" },
    category: { type: String, default: "" },
    stock: { type: Number, default: 0 },
});

module.exports = mongoose.model('product', productSchema);
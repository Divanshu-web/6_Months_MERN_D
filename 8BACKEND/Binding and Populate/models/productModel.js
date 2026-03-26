const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "", required: true },
    price: { type: Number, default: 0, required: true },
    description: { type: String, default: "" },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
    stock: { type: Number, default: 0 },

    isDelete: {type: Boolean, default: false}
});

module.exports = mongoose.model('product', productSchema);
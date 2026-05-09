const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category", default: null },
    price: { type: Number, default: 0 },
    description: { type: String, default: "" },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedById: { type: String, default: "" },

})

module.exports = new mongoose.model("product", productSchema)
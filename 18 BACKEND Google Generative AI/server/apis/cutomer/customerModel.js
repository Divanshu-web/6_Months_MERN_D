const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    profile: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: Number, default: "" },
    gender: { type: String, default: "" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "category", default: null },
    address: { type: String, default: "" },


    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedById: { type: String, default: "" },

})

module.exports = new mongoose.model("customer", customerSchema)
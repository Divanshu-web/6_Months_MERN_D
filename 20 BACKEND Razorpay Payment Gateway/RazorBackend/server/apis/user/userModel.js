const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    userType: { type: Number, default: "" }, // 1 - Admin , 2 - Customer 
    phone: { type: Number, default: "" },

    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: null },

    status: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    addedById: { type: String, default: "" },
    updatedById: { type: String, default: "" },

})

module.exports = new mongoose.model("user", userSchema)
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        mobile: { type: String },

        firmName: { type: String },
        plan: { type: String },

        address: { type: String },
        state: { type: String },
        pinCode: { type: String },

        gstNumber: { type: String },
        categories: { type: [String] },
        dlNo1: { type: String },
        dlNo2: { type: String },
        fssaiNo: { type: String },
        role: { type: String },

        accountName: { type: String },
        accountNumber: { type: String },
        ifscCode: { type: String },
        branch: { type: String },

        signature: { type: String },

    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
const mongoose = require('mongoose');
const cropSchema = require('./Crop');

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
        },
        password: {type: String, required: true},
        farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm" },
        money: Number,
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
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
        crops: [cropSchema],
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
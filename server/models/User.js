const mongoose = require('mongoose');
const cropSchema = require('./Crop');

const userSchema = new mongoose.Schema({
    _id: Integer,
    username: { 
        type: String,
        required: true,
        unique: true,
    },
    email: {type: String, required: true},
    password: {type: String, required: true},
    crops: [cropSchema],
},
{
    toJSON: {
        getters: true,
    },
}
)

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.log(err);
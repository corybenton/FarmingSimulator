const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    cropName: { type: String, required: true },
    price: Number,
    stock: Number,
})
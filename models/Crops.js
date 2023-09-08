const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    crop: { type: String, required: true },
    price: Number,
    stock: Number,
})

module.exports = Book;
const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema(
    {
        cropName: { type: String, required: true },
        price: Number,
        stored: Number,
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
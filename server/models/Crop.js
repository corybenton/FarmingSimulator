const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema(
    {
        cropName: { type: String, required: true },
        amount: { type: Number, default: 0 },
        growTime: { type: Number }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
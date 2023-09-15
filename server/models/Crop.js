const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema(
    {
        cropName: { type: String, required: true },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema(
    {
        plots: { type: Number, required: true, default: 1 },
        plantedCrops: { type: mongoose.Schema.Types.ObjectId, ref: "Crop" },
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema(
    {
        farmId: { type: Number, required: true },
        plots: { type: Number },
        plantedCrops: []
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
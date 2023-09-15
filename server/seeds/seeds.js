const db = require('../config/connection');
const { Crop, User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./UserData.json');
const cropData = require('./CropData.json');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Farm', 'farms');
    await cleanDB('Crop', 'crops');

    await User.insertMany(userData);
    await Crop.insertMany(cropData);
});
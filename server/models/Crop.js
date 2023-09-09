const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    crop: { type: String, required: true },
    price: Number,
    stock: Number,
})

const Crop = mongoose.model('Crop', cropSchema);

const handleError = (err) => console.log(err);

Crop.create({
    crop: potato
})
.then(result => console.log('Created new crop', result))
.catch(err => handleError(err));

Crop.create({
    crop: wheat
})
.then(result => console.log('Created new crop', result))
.catch(err => handleError(err));

Crop.create({
    crop: barley
})
.then(result => console.log('Created new crop', result))
.catch(err => handleError(err));

Crop.create({
    crop: corn
})
.then(result => console.log('Created new crop', result))
.catch(err => handleError(err));
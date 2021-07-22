const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    street: String,
    number: Number,
    cp: Number,
    floor: Number,
    rooms: Number,
    bathrooms: Number,
    sale: Boolean,
    price: Number,
    created_at: Date
});

module.exports = mongoose.model('Property', propertySchema);
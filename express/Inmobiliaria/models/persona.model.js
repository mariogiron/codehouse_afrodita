const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    active: Boolean
});

// GET, SET
personaSchema.virtual('full_name').get(function () {
    return this.name + ' ' + this.surname;
});

// pers.full_name = 'Rosario Flores';
personaSchema.virtual('full_name').set(function (newValue) {
    const arr = newValue.split(' ');
    this.name = arr[0];
    this.surname = arr[1];
});

module.exports = mongoose.model('Persona', personaSchema);
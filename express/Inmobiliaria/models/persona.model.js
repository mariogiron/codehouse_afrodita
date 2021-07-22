const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    active: Boolean
});

module.exports = mongoose.model('Persona', personaSchema);
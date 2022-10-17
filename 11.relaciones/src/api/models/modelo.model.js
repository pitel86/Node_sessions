const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModeloSchema = new Schema({
    name: {type: String, required: true},
    version: {type: String, required: true},
    photo: {type: String, required: false}
});

const Modelo = mongoose.model('model', ModeloSchema);

module.exports = Modelo;
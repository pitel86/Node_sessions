const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fruitisSchema = new Schema(
    {
        name: {type: String, required: true},
        imagen: {type: String, required: true},
        origen: {type: String, required: false},
    },{
        timestamps: true
    }
);

const Fruiti = mongoose.model('fruiti', fruitisSchema);

module.exports = Fruiti;
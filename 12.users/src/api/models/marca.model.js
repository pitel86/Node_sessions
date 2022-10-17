const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarcaSchema = new Schema({
    name: {type: String, required: true},
    pais: {type: String, required: true},
    modelos: [{type: Schema.Types.ObjectId, ref: "model"}]
});

const Marca = mongoose.model('marcas', MarcaSchema);

module.exports = Marca;
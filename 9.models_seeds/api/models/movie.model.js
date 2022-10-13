const mongoose = require('mongoose');

//Obtengo los schemas de mongoose
const Schema = mongoose.Schema;


const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        year: {type: Number, required: false},
        poster: {type: String, required: true},
        actors: [{type: String, required: false}]
    },{
        timestamps: true
    }
)

// Movie --> modelo de moongose, movie seria el nombre de mi coleccion y son elementos del tipo movieSchema 
const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
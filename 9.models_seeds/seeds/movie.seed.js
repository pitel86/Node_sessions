const mongoose = require('mongoose');

const Movie = require('../api/models/movie.model');

const movies = [{
    title: "La jungla de Cristal",
    year: "1988",
    poster: "https://pics.filmaffinity.com/Jungla_de_cristal-336213173-mmed.jpg",
    actors: ["Bruce Willis", "Alan Rickman"],
}, {
    title: "La Roca",
    year: "1996",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBI6XEctJB23g5CR1ExhLGmRk6lB9JRSSv9ww3SaqBKf_1avUB",
    actors: ["Sean Connery", "Nicolas Cage"],
},{
    title: "La Mascara",
    year: "1994",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlCwhV2kN8fJlPEM2YltCp4R4FS7YwQ4kucbFCShulwrvJlnQX",
    actors: ["Jim Carrey", "Cameron Diaz"],
}]

const movieMap = movies.map((movie) => new Movie(movie));

mongoose.connect("mongodb+srv://root:root@cluster0.icgwqdl.mongodb.net/pepe?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length){
        await Movie.collection.drop();
        console.log("pelis eliminadas")
    }
}).catch((error) => console.log("error borrando pelis", error))
.then(async () => {
    await Movie.insertMany(movieMap)
    console.log("pelis creadas")
}).catch((error) => console.log("error insertando ", error))
.finally(() => {mongoose.disconnect()});
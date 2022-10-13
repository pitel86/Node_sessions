const express = require('express');
const app = express();
const Movie = require('./api/models/movie.model');
const {connect} = require('./utils/database');
connect();

const router = express();

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send(movies)
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const movies = await Movie.findById(id);
        res.send(movies)
    } catch (error) {
        console.log(error);
    }
})



app.use('/movies', router);
const PORT = 8000;
app.listen(PORT, () => console.log(`listen in port: http://localhost:${PORT}`))


//   mongodb+srv://root:root@cluster0.icgwqdl.mongodb.net/pepe?retryWrites=true&w=majority


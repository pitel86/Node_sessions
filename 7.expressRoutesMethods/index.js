const express = require('express');

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CRUD --> CREATE READ UPDATE AND DELETE
// GET --> READ --> Leer información de la BBDD y la devuelve al usuario
// POST --> CREATE --> Envía información a la BBDD y crea nuevos elementos 
// DELETE --> DELETE --> Elimina un elemento o elementos de la BBDD
// PUT / PATCH --> UPDATE --> Envía información a la BBDD y actualiza el elemento

const router = express.Router();
const router2 = express.Router();


router.get('/', (req, res) => {
    console.log(req.body)
    res.send("este es mi get"+ req.body.name)
})



router.get('/title', (req, res) => {
    const {title, subtitle} = req.query
    res.send("este es mi get de peli por title "+ title + subtitle)
})


router.get('/actors/:actors', (req, res) => {
    const {actors} = req.params
    res.send("este es mi get de peli por actors "+ tilte)
})


router.get('/:id', (req, res) => {
    const {id} = req.params
    res.send("este es mi get de peli con id")
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send("este es mi post"+ req.body.name)
})
router.put('/', (req, res) => {
    res.send("este es mi put")
})
router.delete('/', (req, res) => {
    res.send("este es mi delete")
})


router2.get('/', (req, res) => {
    res.send("este es mi get de routter2")
})

router2.get('/actor', (req, res) => {
    res.send("este es mi get de peli de rouuter2")
})

router2.post('/', (req, res) => {
    res.send("este es mi post de router2")
})
router2.put('/', (req, res) => {
    res.send("este es mi put de router 2")
})
router2.delete('/', (req, res) => {
    res.send("este es mi delete de router 2")
})



app.use('/movies', router) //--> construye ruta http://localhost:8000/movies/
app.use('/actors', router2)

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));
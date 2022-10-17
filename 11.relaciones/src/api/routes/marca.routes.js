const express = require('express');
const {getAllMarcas, postMarca} = require('../controllers/marca.controller');
const router = express.Router();

router.get('/', getAllMarcas);
router.post('/', postMarca);
router.put('/', (req, res) => {res.send("este es el put")});
router.delete('/', (req, res) => {res.send("este es el delete")});

module.exports = router;
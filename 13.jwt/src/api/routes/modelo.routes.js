const express = require('express');

const  {getAllModelos, postModelo} = require('../controllers/modelo.controller');

const router = express.Router();

router.get('/', getAllModelos);
router.post('/', postModelo);
router.put('/', (req, res) => {res.send("este es el put")});
router.delete('/', (req, res) => {res.send("este es el delete")});

module.exports = router;
const express = require('express');
const {getAllMarcas, postMarca} = require('../controllers/marca.controller');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllMarcas);
router.post('/',[isAuth],  postMarca);
router.put('/',[isAuth], (req, res) => {res.send("este es el put")});
router.delete('/', (req, res) => {res.send("este es el delete")});

module.exports = router;
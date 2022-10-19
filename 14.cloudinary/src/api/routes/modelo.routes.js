const express = require('express');
const upload = require('../../middlewares/upload.files');
const  {getAllModelos, postModelo, putModelo} = require('../controllers/modelo.controller');

const router = express.Router();

router.get('/', getAllModelos);
// router.post('/', upload.single('photo'), postModelo);
router.post('/', upload.fields([{name:'photo', maxCount: 1},{name:'photo2', maxCount: 1}]), postModelo);
router.put('/:id', upload.single('photo'), putModelo);
router.delete('/', (req, res) => {res.send("este es el delete")});

module.exports = router;
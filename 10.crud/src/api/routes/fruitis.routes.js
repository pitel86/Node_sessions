const express = require('express');

const router = express.Router();

const {getAllFruitis, getFruiti, postNewFruiti, putFruiti, deleteFruiti } = require('../controllers/fruitis.controllers');

router.get('/', getAllFruitis);
router.get('/:id', getFruiti);
router.post('/', postNewFruiti);
router.put('/:id', putFruiti);
router.delete('/:id', deleteFruiti);

module.exports = router;
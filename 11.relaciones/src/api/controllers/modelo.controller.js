const Modelo = require('../models/modelo.model');

const getAllModelos = async (req, res, next) => {
    try {
        const modelos = await Modelo.find();
        return res.status(200).json(modelos);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}


const postModelo = async (req, res, next) => {
    try {
        const newModelo = new Modelo(req.body);
        const createdModelo = await newModelo.save();
        return res.status(200).json(createdModelo) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

module.exports = {getAllModelos, postModelo}
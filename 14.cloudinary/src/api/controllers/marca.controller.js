const Marca = require('../models/marca.model');

const getAllMarcas = async (req, res, next) => {
    try {
        const marcas = await Marca.find().populate("modelos");
        return res.status(200).json(marcas);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}


const postMarca = async (req, res, next) => {
    try {
        const newMarca = new Marca(req.body);
        const createdMarca = await newMarca.save();
        return res.status(200).json(createdMarca) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

module.exports = {getAllMarcas, postMarca}
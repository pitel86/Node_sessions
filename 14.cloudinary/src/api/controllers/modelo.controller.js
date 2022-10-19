const Modelo = require('../models/modelo.model');
const {deleteFile} = require('../../middlewares/delete.file');

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
        // console.log(req.file);
        // if(req.file){
        //     newModelo.photo = req.file.path;
        // }
        console.log(req.files)
        if(req.files.photo){
            newModelo.photo = req.files.photo[0].path
        }
        if(req.files.photo2){
            newModelo.photo2 = req.files.photo2[0].path
        }
        const createdModelo = await newModelo.save();
        return res.status(200).json(createdModelo) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putModelo = async (req, res, next) => {
    try {
        const {id} = req.params;
        const putModelo = new Modelo(req.body);
        putModelo._id = id;
        if(req.file){
            putModelo.photo = req.file.path
        }

        const modeloDB = await Modelo.findByIdAndUpdate(id, putModelo);
        if(modeloDB.photo){
            deleteFile(modeloDB.photo)
        }
        return res.status(200).json(putModelo) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

module.exports = {getAllModelos, postModelo, putModelo}
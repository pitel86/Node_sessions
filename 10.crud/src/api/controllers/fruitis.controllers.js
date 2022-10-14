const Fruiti = require('../models/fruitis.models');

const getAllFruitis = async (req, res) => {
    try {
        const allFruitis = await Fruiti.find();
        return res.status(200).json(allFruitis);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getFruiti = async (req, res) => {
    try {
        const {id} = req.params;
        const allFruitis = await Fruiti.findById(id);
        return res.status(200).json(allFruitis);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postNewFruiti = async (req, res) => {
    try {
        console.log(req.body)
        const {name, origen, imagen} = req.body
        const newFruiti = new Fruiti({name, origen, imagen});
        const createdFruiti = await newFruiti.save();
        return res.status(201).json(createdFruiti);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putFruiti = async (req, res) => {
    try {
        const {id} = req.params;
        const putFruiti = new Fruiti(req.body);
        putFruiti._id = id;

        const fruitiDb = await Fruiti.findByIdAndUpdate(id, putFruiti, {new: true});
        if(!fruitiDb){
            return res.status(404).json({"message": "Fruiti not found"});
        }
        return res.status(200).json(fruitiDb);

    } catch (error) {
        return res.status(500).json(error)
    }
};

const deleteFruiti = async (req, res) => {
    try {
        const {id} = req.params;
        const fruitiDb = await Fruiti.findByIdAndDelete(id);
        if(!fruitiDb){
            return res.status(404).json({"message": "Fruiti not found"});
        }
        return res.status(200).json(fruitiDb);
    } catch (error) {
        return res.status(500).json(error)  
    }
};

module.exports = {getAllFruitis, getFruiti, postNewFruiti, putFruiti, deleteFruiti };
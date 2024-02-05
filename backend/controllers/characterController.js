const mongoose = require('mongoose')
const character = require('../models/characterModel')

//get all characters
const getAllCharacters = async(req, res) => {
    const characters = await character.find({lessonNumber: req.params.lessonNum, courseNumber: req.params.courseNum})
    if (!characters){
        return res.status(404).json({error: "No such characters"})
    }
    res.status(200).json(characters)
}

//create new character post
const createCharacter = async(req, res) => {
    const {chineseSymbol, pinyin, englishDefinition, courseNumber, lessonNumber} = req.body
    
    try {
        const chineseCharacter = await character.create({chineseSymbol, pinyin, englishDefinition, courseNumber, lessonNumber})
        res.status(200).json(chineseCharacter)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete character post
const deleteCharacter = async(req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such character"})
    }
    const character = await character.findOneAndDelete({_id: id})

    if (!character){
        return res.status(404).json({error: "No such character"})
    }
    res.status(200).json(chineseCharacter)
}

//update character post
const updateCharacter = async(req, res) => { 
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such character"})
    }
    const character = await character.findOneAndUpdate({_id: id},
        ...req.body)

    if (!character){
        return res.status(404).json({error: "No such character"})
    }
    res.status(200).json(chineseCharacter)
}

module.exports = {
    getAllCharacters,
    createCharacter,
    deleteCharacter,
    updateCharacter
}
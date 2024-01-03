const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema({
    chineseSymbol: {
        type: String,
        required: true
    },
    pinyin: {
        type: String,
        required: true
    },
    englishDefinition: {
        type: String,
        required: true
    },
    courseNumber: {
        type: String,
        required: true
    },
    lessonNumber: {
        type: String,
        required: true
    }

    
})

module.exports = mongoose.model("Character", characterSchema)

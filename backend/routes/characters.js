const express = require('express')
const {createCharacter,
    getAllCharactersByLessonCourse,
    getAllCharactersByCourse,
    deleteMultipleCharacters
} = require('../controllers/characterController')

const router = express.Router()

router.post('/', createCharacter)
router.get('/:courseNum', getAllCharactersByCourse)
router.get('/:lessonNum/:courseNum', getAllCharactersByLessonCourse)
router.delete('/:lessonNumber', deleteMultipleCharacters)

module.exports = router
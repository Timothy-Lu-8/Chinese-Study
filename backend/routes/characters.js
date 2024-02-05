const express = require('express')
const {createCharacter,
    getAllCharacters
} = require('../controllers/characterController')

const router = express.Router()

router.post('/', createCharacter)
router.get('/:lessonNum', getAllCharacters)

module.exports = router
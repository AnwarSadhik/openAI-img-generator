const express = require('express')
const router = express.Router()
const { generateimg } = require('../controllers/openAiController')

router.post('/generateimg',generateimg)

module.exports = router
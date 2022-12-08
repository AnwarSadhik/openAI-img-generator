const express = require('express')
require('dotenv').config({path: '.env'})
const port = process.env.PORT || 5000
const path = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai',require('./routes/openAiRoute'))

app.listen(port, () => console.log(`Server started on port ${port}`))
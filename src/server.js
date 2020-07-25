const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('running'))

app.listen('3000', function () {
    console.log('Server started at: http://localhost:3000/')
})
// connect mongodb
require('./config/db')

// require variabel
const express = require('express')
const Karyawan = require('./model/karyawanModel')

// public variabel
const app = express()
const port = 3000

// express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// route
app.get('/', async (req, res) => {
    const data = await Karyawan.find()
    res.json(data)
})

app.listen(port, () => {
    console.log('listen...')
})
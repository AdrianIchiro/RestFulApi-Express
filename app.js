// require variabel
const express = require('express')


// public variabel
const app = express()
const port = 3000

// express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.listen(port, () => {
    console.log('listen...')
})
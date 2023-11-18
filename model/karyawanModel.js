const mongoose = require('mongoose')

// insert data 
const Karyawan = mongoose.model('Karyawan', {
    nama: {
        type: String,
        require: true
    },
    posisi: {
        type: String,
        require: true
    }
})

module.exports = Karyawan
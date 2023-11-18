const mongoose = require('mongoose')

// variabel require
const url = "mongodb://127.0.0.1:27017/office"

mongoose.connect(url)

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

const karyawan1 = new Karyawan({
    nama: 'adrian',
    posisi: 'programmer',
})

karyawan1.save()

console.log('data berhasil masuk')
const express = require('express')
const mongoose = require('mongoose')

const jankenSchema = mongoose.Schema({
    "result": {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Janken', jankenSchema);


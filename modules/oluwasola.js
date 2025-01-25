const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require(mongoose);
const Schema = mongoose.Schema;

//oluwasola
const oluwasolaSchema = newSchema({
    name: {
        type: String,
        required: [true, 'Name field is required' ]
    },
    rank:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    }
});

const Oluwasola = mongoose.model('oluwasola', oluwasolaSchema);

module.exports = Oluwasola;
'use strict';
let mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    titulo : {type : String, required : true},
    editorial : {type : String, required : true},
    precio : {type : Number, required : true}
});

module.exports = mongoose.model('Book', bookSchema);
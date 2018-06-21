'use strict';
const express = require('express');
const router = express.Router();
const bookApi = require('./books.api');

router.route('/registrar_libro')
    .post(function(req , res){
        bookApi.registrar(req , res);
    });

router.route('/listar_libros')
    .get(function(req , res){
        bookApi.listar_todos(req , res);
    });


module.exports = router;

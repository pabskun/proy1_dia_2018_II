'use strict';
const express = require('express');
const router = express.Router();
const users = require('./users.api');

router.route('/registrar_usuario')
    .post(function (req, res) {
        users.registrar(req, res);
    });

router.route('/agregar_titulo')
    .post(function (req, res) {
        users.agregar_titulo(req, res);
    });

router.route('/agregar_pasatiempo')
    .post(function (req, res) {
        users.agregar_pasatiempo(req, res);
    });

router.route('/listar_usuarios')
    .get(function (req, res) {
        users.listar(req, res);
    });

router.route('/buscar_usuario_id')
    .post(function (req, res) {
        users.buscar_usuario_por_id(req, res);
    });

router.route('/modificar_usuario')
    .post(function (req, res) {
        users.modificar_usuario(req, res);
    });

router.route('/eliminar_usuario')
    .post(function (req, res) {
        users.eliminar_usuario(req, res);
    });

module.exports = router;
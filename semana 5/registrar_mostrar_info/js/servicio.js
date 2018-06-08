'use strict';
let listaPacientes = [];

function registrarPaciente(paInfoPaciente){
    listaPacientes.push(paInfoPaciente);
};

function obtenerListaPacientes(){
    return listaPacientes;
};
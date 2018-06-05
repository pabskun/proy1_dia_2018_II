'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let inputNombre = document.querySelector('#txtNombre');
    let sNombre = inputNombre.value;

    let inputApellido = document.querySelector('#txtApellido');
    let sApellido = inputApellido.value;

    console.log(sNombre);
    console.log(sApellido);
};
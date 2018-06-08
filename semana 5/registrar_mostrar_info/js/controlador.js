'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');

let inputPaciente = document.querySelector('#txtPaciente');
let inputFecha = document.querySelector('#txtFecha');
let inputHora =  document.querySelector('#txtHora');
let inputColor = document.querySelector('#txtEtiqueta');


botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let aInfoPaciente = [];

    let sPaciente =  inputPaciente.value;
    let dFecha = new Date(inputFecha.value);
    let sHora = inputHora.value;
    let sColor = inputColor.value;

    aInfoPaciente.push(sPaciente, dFecha, sHora, sColor);
    registrarPaciente(aInfoPaciente);
    mostrarDatos();
};

function mostrarDatos(){
    let tbody = document.querySelector('#tblPersonas tbody');
    tbody.innerHTML = '';
    let listaPacientes = obtenerListaPacientes();

    for(let i = 0; i < listaPacientes.length; i++){
        let fila = tbody.insertRow();

        let tdPaciente = fila.insertCell();
        let tdFecha = fila.insertCell();
        let tdHora = fila.insertCell();
        let tdColor = fila.insertCell();

        tdPaciente.innerHTML = listaPacientes[i][0];
        tdFecha.innerHTML = listaPacientes[i][1];
        tdHora.innerHTML = listaPacientes[i][2];

        let divColor = document.createElement('div');
        divColor.classList.add('div_circulo');
        divColor.style.backgroundColor = listaPacientes[i][3];

        tdColor.appendChild(divColor);
    }
};
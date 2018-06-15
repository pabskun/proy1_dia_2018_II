'use strict';
mostrarListaPersonas();
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNacimiento = document.querySelector('#txtFecha');
inputNacimiento.addEventListener('change', calcularEdad);

let inputNombre = document.querySelector('#txtNombre');
let inputEdad = document.querySelector('#txtEdad');
let inputContrasenna = document.querySelector('#txtContrasenna');
let inputConfirmacion = document.querySelector('#txtConfirmacion');

let sNombre = '';
let dFechaNacimiento = '';
let nEdad = 0;
let sContrasenna = '';
let sConfirmacion = '';

let regexSoloLetras = /^[a-zA-Z]+$/;
let regexSoloNumeros = /^[0-9]+$/;
let regexContrasenna = /^[a-zA-Z0-9]{8,12}$/;

function obtenerDatos(){
    let bError = false;
    let aInfoPersona = [];

    sNombre = inputNombre.value;
    dFechaNacimiento = inputNacimiento.value;
    nEdad = inputEdad.value;
    sContrasenna = inputContrasenna.value;
    sConfirmacion = inputConfirmacion.value;

    bError = validar();
    
    if(bError == true){
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el usuario, revise los campos en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
          });
    }else{
        aInfoPersona.push(sNombre, dFechaNacimiento, nEdad, sContrasenna);
        registrarPersona(aInfoPersona);
        swal({
            title: 'Registro correcto',
            text: 'El usuario se ha registrado de forma correcta',
            type: 'success',
            confirmButtonText: 'Entendido'
          });
    
        limpiarFormulario();
        mostrarListaPersonas();
    }
    
};

function validar(){
    let bError = false;

    sNombre = inputNombre.value;
    dFechaNacimiento = new Date(inputNacimiento.value);
    nEdad = Number(inputEdad.value);
    sContrasenna = inputContrasenna.value;
    sConfirmacion = inputConfirmacion.value;

    // Validación del nombre
    if(sNombre == '' || (regexSoloLetras.test(sNombre) == false) ){
        inputNombre.classList.add('errorInput');
        bError = true;
    }else{
        inputNombre.classList.remove('errorInput');
    }
    // Validación de la fecha de nacimiento
    if(dFechaNacimiento == '' || dFechaNacimiento > Date() ) {
        inputNacimiento.classList.add('errorInput');
        bError = true;
    }else{
        inputNacimiento.classList.remove('errorInput');
    }
    // Validación de la edad
    if(nEdad == 0 || (regexSoloNumeros.test(nEdad) == false) || nEdad < Number(inputEdad.min) || nEdad > Number(inputEdad.max)){
        inputEdad.classList.add('errorInput');
        bError = true;
    }else{
        inputEdad.classList.remove('errorInput');
    }

   
    // Validación de la contraseña y confirmación
    if(sContrasenna != sConfirmacion){
        inputContrasenna.classList.add('errorInput');
        inputConfirmacion.classList.add('errorInput');
        bError = true;
    }else{
        inputContrasenna.classList.remove('errorInput');
        inputConfirmacion.classList.remove('errorInput');
    }

     // Validación de la contraseña
     if(sContrasenna == '' || regexContrasenna.test(sContrasenna) == false){
        inputContrasenna.classList.add('errorInput');
        bError = true;
    }else{
        inputContrasenna.classList.remove('errorInput');
    }

    return bError;
};

function calcularEdad(){
    let inputNacimiento = document.querySelector('#txtFecha');
    let dFechaNacimiento = new Date(inputNacimiento.value); 

    let nEdad = new Date().getFullYear() - dFechaNacimiento.getFullYear();

    document.querySelector('#txtEdad').value = nEdad;
}

function limpiarFormulario(){
    inputNombre.value = '';
    inputEdad.value = 0;
    inputNacimiento.value = '';
    inputContrasenna.value = '';
    inputConfirmacion.value = '';
};

function mostrarListaPersonas(){
    let listaPersonas = obtenerListaPersonas();
    let tbody = document.querySelector('#tblPersonas tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPersonas.length; i++){
        let fila = tbody.insertRow();

        let celdaNombre = fila.insertCell();
        let celdaFecha = fila.insertCell();
        let celdaEdad = fila.insertCell();

        celdaNombre.innerHTML = listaPersonas[i][0];
        celdaFecha.innerHTML = listaPersonas[i][1];
        celdaEdad.innerHTML = listaPersonas[i][2];
    }
};
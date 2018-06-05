'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);


function obtenerDatos(){
    let bError = false;
    let inputNombre = document.querySelector('#txtNombre');
    let inputNacimiento = document.querySelector('#txtFecha');
    let inputEdad = document.querySelector('#txtEdad');
    let inputContrasenna = document.querySelector('#txtContrasenna');
    let inputConfirmacion = document.querySelector('#txtConfirmacion');

    let sNombre = inputNombre.value;
    let dFechaNacimiento = inputNacimiento.value;
    let nEdad = inputEdad.value;
    let sContrasenna = inputContrasenna.value;
    let sConfirmacion = inputConfirmacion.value;

    bError = validar();
    
    if(bError == true){
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el usuario, revise los campos en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
          });
    }else{
        swal({
            title: 'Registro correcto',
            text: 'El usuario se ha registrado de forma correcta',
            type: 'success',
            confirmButtonText: 'Entendido'
          });
        console.log(sNombre);
        console.log(dFechaNacimiento);
        console.log(nEdad);
        console.log(sContrasenna);
        console.log(sConfirmacion);
    }
    

};

function validar(){
    let bError = false;

    let inputNombre = document.querySelector('#txtNombre');
    let inputNacimiento = document.querySelector('#txtFecha');
    let inputEdad = document.querySelector('#txtEdad');
    let inputContrasenna = document.querySelector('#txtContrasenna');
    let inputConfirmacion = document.querySelector('#txtConfirmacion');

    let sNombre = inputNombre.value;
    let dFechaNacimiento = new Date(inputNacimiento.value);
    let nEdad = Number(inputEdad.value);
    let sContrasenna = inputContrasenna.value;
    let sConfirmacion = inputConfirmacion.value;

    let regexSoloLetras = /^[a-zA-Z]+$/;

    // Validación del nombre
    if(sNombre == '' || (regexSoloLetras.test(sNombre) == false) ){
        inputNombre.classList.add('errorInput');
        bError = true;
    }else{
        inputNombre.classList.remove('errorInput');
    }
    // Validación de la fecha de nacimiento
    if(dFechaNacimiento == '' || (dFechaNacimiento > Date() == false)) {
        inputNacimiento.classList.add('errorInput');
        bError = true;
    }else{
        inputNacimiento.classList.remove('errorInput');
    }




    return bError;
};
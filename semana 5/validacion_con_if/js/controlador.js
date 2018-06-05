'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNacimiento = document.querySelector('#txtFecha');
inputNacimiento.addEventListener('change', calcularEdad);

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
    let regexSoloNumeros = /^[0-9]+$/;
    let regexContrasenna = /^[a-zA-Z0-9]{8,12}$/;

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
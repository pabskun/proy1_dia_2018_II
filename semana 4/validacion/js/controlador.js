'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);


function obtenerDatos(){
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

    validar();
    console.log(sNombre);
    console.log(dFechaNacimiento);
    console.log(nEdad);
    console.log(sContrasenna);
    console.log(sConfirmacion);

};

function validar(){
    let arregloInputs = document.querySelectorAll('input:required');
    let bError = false;

    for(let i = 0; i < arregloInputs.length; i++){
        if(arregloInputs[i].value == ''){
            bError = true;
            arregloInputs[i].classList.add('errorInput');
        }else{
            arregloInputs[i].classList.remove('errorInput');
        }

        if(arregloInputs[i].type == 'number'){
            // if que verifica el mínimo
            if(arregloInputs[i].min != null ){
                if(Number(arregloInputs[i].value) < Number(arregloInputs[i].min)){
                    bError = true;
                    arregloInputs[i].classList.add('errorInput');
                }
            }
            // if que verifica el máximo
            if(arregloInputs[i].max != null){
                if(Number(arregloInputs[i].value) > Number(arregloInputs[i].max)){
                    bError = true;
                    arregloInputs[i].classList.add('errorInput');
                }
            }
        }
    }

    return bError;
};
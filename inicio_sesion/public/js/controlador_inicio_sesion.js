'use strict';
const inputUsuario = document.querySelector('#txtUsuario');
const inputContrasenna = document.querySelector('#txtContrasenna');
const botonIniciar = document.querySelector('#btnIniciarSesion');

botonIniciar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let sUsuario = inputUsuario.value;
    let sContrasenna = inputContrasenna.value;
    
    verificarCredenciales(sUsuario, sContrasenna);
}

function verificarCredenciales(psUsuario, psContrasenna){
    //No usar en la vida real, solo con fines académicos, no se hace en el front end; Atte: Pabs
    let listaPersonas = obtenerListaPersonas();
    let sRol = '';

    for(let i = 0; i < listaPersonas.length; i++){
        if(psUsuario === listaPersonas[i]['correo']){
            if(psContrasenna === listaPersonas[i]['contrasenna']){

                sRol = listaPersonas[i]['rol']; 

                localStorage.setItem('nombreUsuarioActivo', listaPersonas[i]['nombre_completo']);
                localStorage.setItem('correoUsuarioActivo', listaPersonas[i]['correo']);
                localStorage.setItem('rolUsuarioActivo', sRol);

            }
        }
    }
    switch(sRol){
        case 'administrador':
            window.location.href = 'usuarios.html';
        break;
        case 'asistente':
            window.location.href = 'agregarTitulo.html';
        break;
    }
}

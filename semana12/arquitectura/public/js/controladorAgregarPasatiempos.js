'use strict';
mostrarPersonas();
const selectPersona = document.querySelector('#sltPersona');
const botonAgregar = document.querySelector('#btnAgregarPasatiempo');
// const checkboxes = document.querySelector('input[type=checkbox]');
botonAgregar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    let personaId = selectPersona.value;
    const listaPasatiempos = document.querySelectorAll('input[type=checkbox]:checked');
    
    for(let i = 0; i < listaPasatiempos.length; i++){
        
        agregarPasatiempo(personaId, listaPasatiempos[i].value);
    };
}

function mostrarPersonas(){
    let usuarios = obtenerListaPersonas();
    let selectPersona = document.querySelector('#sltPersona');
    for(let i = 0; i < usuarios.length; i++){
        let opcion = new Option(usuarios[i]['nombre_completo'])
        opcion.value = usuarios[i]['_id'];
        
        selectPersona.options.add(opcion);
        
    }
};
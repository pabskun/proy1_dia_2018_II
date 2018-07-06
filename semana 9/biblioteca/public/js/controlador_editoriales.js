'use strict';

mostrar_editoriales();
let botonRegistrar = document.querySelector('#btnRegistrar');
let inputEditorial = document.querySelector('#txtNombreEditorial');
let inputPais = document.querySelector('#txtPais');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){
    let sEditorial = inputEditorial.value;
    let sPais = inputPais.value;

    registrar_editorial(sEditorial, sPais);
    mostrar_editoriales();
};

function mostrar_editoriales(){
    let lista_editoriales = listar_editoriales();

    let tbody = document.querySelector('#tblEditoriales tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < lista_editoriales.length; i++){
        let fila = tbody.insertRow();

        let celdaEditorial = fila.insertCell();
        let celdaPais = fila.insertCell();

        celdaEditorial.innerHTML = lista_editoriales[i][0];
        celdaPais.innerHTML = lista_editoriales[i][1];
    };

};
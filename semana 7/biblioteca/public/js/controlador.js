'use strict';
mostrarListaLibros()
let botonRegistrar = document.querySelector('#btnRegistrar');
let inputTitulo = document.querySelector('#txtTitulo');
let inputEditorial = document.querySelector('#txtEditorial');
let inputPrecio = document.querySelector('#txtPrecio');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){
    let sTitulo = inputTitulo.value;
    let sEditorial = inputEditorial.value;
    let nPrecio = Number(inputPrecio.value);

    registrarLibro(sTitulo , sEditorial, nPrecio);
    mostrarListaLibros()    
};

function mostrarListaLibros(){
    let listaLibros = obtenerLibros();
    let tbody = document.querySelector('#tblLibros tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaLibros.length; i++){
        let fila = tbody.insertRow();

        let celdaTitulo = fila.insertCell();
        let celdaEditorial = fila.insertCell();
        let celdaPrecio = fila.insertCell();

        celdaTitulo.innerHTML = listaLibros[i]['titulo'];
        celdaEditorial.innerHTML = listaLibros[i]['editorial'];
        celdaPrecio.innerHTML = listaLibros[i]['precio'];
 
    }
};
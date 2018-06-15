'use strict';
let listaPersonas = [
    ['Sebastián', '03/13/1999', 19],
    ['Camila', '10/30/1999', 18],
    ['Pablo', '11/29/1999', 18],
    ['Francesca','02/02/1988' ,30]
];

function registrarPersona(paInfoPersona){
    listaPersonas.push(paInfoPersona);
};

function obtenerListaPersonas(){
    return listaPersonas;
};


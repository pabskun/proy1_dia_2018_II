'use strict';
let listaPersonas = [
    ['Sebastián', '13/03/1999', 19],
    ['Camila', '30/10/1999', 18],
    ['Pablo', '29/11/1999', 18],
    ['Francesca','02/02/1988' ,30]
];

function registrarPersona(paInfoPersona){
    listaPersonas.push(paInfoPersona);
};

function obtenerListaPersonas(){
    return listaPersonas;
};


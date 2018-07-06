'use strict';

let listaEditoriales = [
    ['Salamandra', 'España'],
    ['DeBolsillo', 'Honduras'],
    ['Norma', 'Costa Rica']
];

function registrar_editorial(psEditorial, psPais){
    let nuevaEditorial = [];

    nuevaEditorial.push(psEditorial , psPais);
    
    listaEditoriales.push(nuevaEditorial);

};

function listar_editoriales(){
    return listaEditoriales;
};
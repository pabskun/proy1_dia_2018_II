'use strict';

function registrarLibro(pTitulo, pEditorial, pPrecio){
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_libro',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
           titulo : pTitulo,
           editorial : pEditorial,
           precio : pPrecio
        }
      });
    
      peticion.done(function(response){
        
      });
    
      peticion.fail(function(){
       
      });
};

function obtenerLibros(){
    let listaLibros = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_libros',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
        listaLibros = response;
      });
    
      peticion.fail(function(){
       
      });

    return listaLibros;
};
/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';


function registrarPersona(sNombre, sEmail, sTelefono, nEdad, sContrasenna, imagenUrl){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            nombre_completo :sNombre,
            correo : sEmail,
            telefono : sTelefono,
            edad : nEdad,
            contrasenna : sContrasenna,
            foto : imagenUrl
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
function obtenerListaPersonas(){
    let listaPersonas = [];

    
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_usuarios',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
        listaPersonas = response;
      });
    
      peticion.fail(function(response){
       
      });

    
    return listaPersonas;
}

function obtener_persona_por_id(pid){
    let usuario = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/buscar_usuario_id',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : pid
        }
      });
    
      peticion.done(function(response){
        usuario = response;
      });
    
      peticion.fail(function(response){
       
      });

      return usuario;
};

function actualizarPersona(_pid,psNombre, psEmail, psTelefono, pnEdad, pimagen){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/modificar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id: _pid,
            nombre_completo : psNombre,
            correo : psEmail,
            telefono : psTelefono,
            edad : pnEdad,
            foto : pimagen
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};

function eliminar_usuario(_pid){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/eliminar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id: _pid
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};


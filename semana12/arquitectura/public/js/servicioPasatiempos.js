function agregarPasatiempo(idPersona, sPasatiempo){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/agregar_pasatiempo',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : idPersona,
            nombre : sPasatiempo
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};
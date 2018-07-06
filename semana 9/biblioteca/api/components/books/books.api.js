'use strict';
const bookModel = require('./books.model');

module.exports.registrar = function(req, res) {
   
    let nuevoLibro = new bookModel({
        titulo : req.body.titulo,
        editorial : req.body.editorial,
        precio : req.body.precio
    });

    nuevoLibro.save(function(error){
        if(error){
            res.json({success : false, msg: 'No se pudo registrar el libro, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'El libro se registró con éxito'}); 
        }
    });
};
module.exports.listar_todos = function(req , res){
    bookModel.find().sort({titulo: 'asc'}).then(
        function(libros){
            res.send(libros);
        }
    );

};
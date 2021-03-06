'use strict';
const userModel = require('./users.model');
const nodemailer = require('nodemailer');

//Primero permitir el acceso de aplicaciones menos seguras: SÍ https://myaccount.google.com/lesssecureapps
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

let mailOptions = {
    from: 'pablo.monestel@gmail.com',
    to: '',
    subject: 'Bienvenido a PabsApp',
    html: ''
};



//Función para registrar un usuario
module.exports.registrar = function (req, res) {
    //Crea una variable nuevoUsuario utilizando como plantilla el userModel
    let nuevoUsuario = new userModel({
        nombre_completo: req.body.nombre_completo,
        correo: req.body.correo,
        telefono: req.body.telefono,
        edad: req.body.edad,
        contrasenna: req.body.contrasenna,
        foto: req.body.foto
    });

    nuevoUsuario.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error' + error });
        } else {
            mailOptions.to = nuevoUsuario.correo;
            mailOptions.html = `
            <html>   
            <head>
                <style>
                    h1{
                        background: #ff7675;
                        padding: 15px 0 15px 0;
                        text-align: center;
                    }
                </style>
            </head> 
            <body>
                <h1>Bienvenido ${nuevoUsuario.nombre_completo} </h1>
                <h2>A PabsApp </h2>
                <p>Sus datos de registro son</p>
                <table>
                    <tr>
                        <td>Nombre</td>
                        <td>${nuevoUsuario.nombre_completo}</td>
                    </tr>
                    <tr>
                        <td>Correo</td>
                        <td>${nuevoUsuario.correo}</td>
                    </tr>
                    <tr>
                        <td>Edad</td>
                        <td>${nuevoUsuario.edad}</td>
                    </tr>
                </table>
                <p>Se le ha asignado la siguiente imagen por que se parece a usted</p>
                <img src=${nuevoUsuario.foto} width="128px" height="128px">
            </body>
            </html>  
            `;
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.json({ success: true, msg: 'El usuario se registró con éxito' });
        }

    });

};

module.exports.listar = function (req, res) {
    userModel.find().then(
        function (usuarios) {
            res.send(usuarios);
        });
};

module.exports.agregar_titulo = function (req, res) {

    userModel.update(
        { _id: req.body._id },
        {
            $push:
            {
                'titulos':
                {
                    titulo: req.body.titulo,
                    institucion: req.body.institucion,
                    anno: req.body.anno
                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo registrar el título, ocurrió el siguiente error' + error });
            } else {
                res.json({ success: true, msg: 'El título se registró con éxito' });
            }
        }
    )
};

module.exports.buscar_usuario_por_id = function (req, res) {
    userModel.findById({ _id: req.body._id }).then(
        function (usuario) {
            res.send(usuario);
        }
    );
};

module.exports.modificar_usuario = function (req, res) {
    userModel.findByIdAndUpdate(req.body._id, { $set: req.body },
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'El usuario no se ha podido modificar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha actualizado correctamente. ' + res });
            }
        });
};

module.exports.eliminar_usuario = function (req, res) {
    userModel.findByIdAndDelete(req.body._id,
        function (err, user) {
            if (err) {
                res.json({ success: false, msg: 'El usuario no se ha podido eliminar. ' + handleError(err) });

            } else {
                res.json({ success: true, msg: 'Se ha eliminado correctamente. ' + res });
            }
        });
};

module.exports.agregar_pasatiempo = function (req, res) {
    
        userModel.update(
            { _id: req.body._id },
            {
                $push:
                {
                    'pasatiempos':
                    {
                        nombre: req.body.nombre
                    }
                }
            },
            function (error) {
                if (error) {
                    res.json({ success: false, msg: 'No se pudo agregar el pasatiempo, ocurrió el siguiente error' + error });
                } else {
                    res.json({ success: true, msg: 'El pasatiempo se agregó con éxito' });
                }
            }
        )
    };
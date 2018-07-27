/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';
let listaPersonas = obtenerListaPersonas();
imprimirListaPersonas();
const botonRegistrar = document.querySelector('#btnRegistrar');
const botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.hidden = true;

botonRegistrar.addEventListener('click' , obtenerDatosRegistro);
botonActualizar.addEventListener('click' , obtenerDatosActualizar);

const inputNombre = document.querySelector('#txtNombre');
const inputEmail = document.querySelector('#txtEmail');
const inputTelefono = document.querySelector('#txtTelefono');
const inputEdad = document.querySelector('#txtEdad');
const inputContrasenna = document.querySelector('#txtContrasenna');
const inputConfirmacion = document.querySelector('#txtConfirmacion');
const inputFiltro = document.querySelector('#txtFiltro');
const elementoImagen = document.querySelector('#txtImagen');
const inputId = document.querySelector('#txtId');


inputFiltro.addEventListener('keyup' , function(){
    imprimirListaPersonas(inputFiltro.value)
});

function obtenerDatosRegistro(){
    
    let bError = false;

    let sNombre = inputNombre.value;    
    let sEmail = inputEmail.value;
    let sTelefono = inputTelefono.value;
    let nEdad = Number(inputEdad.value);
    let sContrasenna = inputContrasenna.value;
    let sConfirmacion = inputConfirmacion.value;

    
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    }else{
        console.log(imagenUrl);
        registrarPersona(sNombre, sEmail, sTelefono, nEdad, sContrasenna, elementoImagen.src);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        listaPersonas = obtenerListaPersonas();
        imprimirListaPersonas();
        limpiarFormulario();
    }
    
};

function obtenerDatosActualizar(){
    
    let bError = false;

    let sNombre = inputNombre.value;    
    let sEmail = inputEmail.value;
    let sTelefono = inputTelefono.value;
    let nEdad = Number(inputEdad.value);
    let _id = inputId.value;
    

    
    
    // bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    }else{
        
        actualizarPersona(_id,sNombre, sEmail, sTelefono, nEdad, elementoImagen.src);
        swal({
            type : 'success',
            title : 'Actualización exitosa',
            text: 'El usuario se actualizó adecuadamente',
            confirmButtonText : 'Entendido'
        });
        listaPersonas = obtenerListaPersonas();
        imprimirListaPersonas();
        limpiarFormulario();
        botonRegistrar.hidden = false;
        botonActualizar.hidden = true;

    }
    
};
function imprimirListaPersonas(pFiltro){
    
    let tbody = document.querySelector('#tblPersonas tbody');
    if(!pFiltro){
        pFiltro = '';
    }
    tbody.innerHTML = '';

    for(let i = 0; i < listaPersonas.length; i++){
        if(listaPersonas[i]['nombre_completo'].toLowerCase().includes(pFiltro.toLowerCase())){
            let fila = tbody.insertRow();
            
            let cFoto = fila.insertCell();
            let cNombre = fila.insertCell();
            let cEmail = fila.insertCell();
            let cTelefono = fila.insertCell();
            let cEdad = fila.insertCell();
            let cConfiguracion = fila.insertCell();
    
            let imagen = document.createElement('img');
            imagen.src = listaPersonas[i]['foto'];
            imagen.classList.add('imageSettings');

    
            cFoto.appendChild(imagen);
           
    
    
            cNombre.innerHTML = listaPersonas[i]['nombre_completo'];
            cEmail.innerHTML = listaPersonas[i]['correo'];
            cTelefono.innerHTML = listaPersonas[i]['telefono'];
            cEdad.innerHTML = listaPersonas[i]['edad'];

            //Se crean los componentes para actualizar
            let botonModificar = document.createElement('a');
            botonModificar.classList.add('fas');
            botonModificar.classList.add('fa-pencil-alt');

            botonModificar.dataset._id = listaPersonas[i]['_id'];

            botonModificar.addEventListener('click', buscar_por_id);

            let botonEliminar = document.createElement('a');
            botonEliminar.classList.add('fas');
            botonEliminar.classList.add('fa-trash-alt');

            botonEliminar.dataset._id = listaPersonas[i]['_id'];

            botonEliminar.addEventListener('click', remover_usuario);

            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonEliminar);


           

        }
        
    }

};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre completo
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error_input');
        bError = true;
    }else{
        inputNombre.classList.remove('error_input');
    }
    //Validación del correo
    if(inputEmail.value == ''){
        inputEmail.classList.add('error_input');
        bError = true;
    }else{
        inputEmail.classList.remove('error_input');
    }
    //Validación del teléfono
    if(inputTelefono.value == ''){
        inputTelefono.classList.add('error_input');
        bError = true;
    }else{
        inputTelefono.classList.remove('error_input');
    }
    //Validación de la edad
    if(inputEdad.value == '' || (regexSoloNumeros.test(inputEdad.value) == false) || Number(inputEdad.value) < Number(inputEdad.min)  || Number(inputEdad.value) > Number(inputEdad.max)){
        inputEdad.classList.add('error_input');
        bError = true;
    }else{
        inputEdad.classList.remove('error_input');
    }

    //Validación de la contraseña

    if(inputContrasenna.value == ''){
        inputContrasenna.classList.add('error_input');
        bError = true;
    }else{
        inputContrasenna.classList.remove('error_input');
    }

    if(inputContrasenna.value != inputConfirmacion.value){
        inputContrasenna.classList.add('error_input');
        inputConfirmacion.classList.add('error_input');
        bError = true;
    }else{
        inputContrasenna.classList.remove('error_input');
        inputConfirmacion.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario(){
    inputNombre.value = '';    
    inputEmail.value = '';
    inputTelefono.value ='';
    inputEdad.value = 0;
    inputContrasenna.value = '';
    inputConfirmacion.value = '';
    elementoImagen.src = '';
};

function buscar_por_id(){
    //Binding
    let _id = this.dataset._id;
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;
    let usuario = obtener_persona_por_id(_id);


    inputNombre.value = usuario['nombre_completo'];    
    inputEmail.value = usuario['correo'];
    inputTelefono.value = usuario['telefono'];
    inputEdad.value = usuario['edad'];
    elementoImagen.src = usuario['foto'];
    inputId.value = usuario['_id'];
};


function remover_usuario(){
    let _id = this.dataset._id;
    swal({
        title: 'Está seguro?',
        text: "El usuario se eliminará permanentemente",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar!'
      }).then((result) => {
        if (result.value) {
            eliminar_usuario(_id);
            listaPersonas = obtenerListaPersonas();
            imprimirListaPersonas();
          swal(
            'Eliminado!',
            'El usuario ha sido eliminado con éxito',
            'success'
          )
        }
      });
   
}
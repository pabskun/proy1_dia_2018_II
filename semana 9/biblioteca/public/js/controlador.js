'use strict';
mostrarListaLibros();
mostrarEditoriales();
let botonRegistrar = document.querySelector('#btnRegistrar');
let inputTitulo = document.querySelector('#txtTitulo');
let selectEditorial = document.querySelector('#txtEditorial');
let inputPrecio = document.querySelector('#txtPrecio');

botonRegistrar.addEventListener('click' , obtenerDatos);

function obtenerDatos(){
    let bError = false;
    let sTitulo = inputTitulo.value;
    let sEditorial = selectEditorial.value;
    let nPrecio = Number(inputPrecio.value);

    //bError = validar();
    
    if(bError == true){
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el usuario, revise los campos en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
          });
    }else{
        let respuesta = registrarLibro(sTitulo , sEditorial, nPrecio);
        if(respuesta.success == true){
            swal({
                title: 'Registro correcto',
                text: respuesta.msg,
                type: 'success',
                confirmButtonText: 'Entendido'
              });
        }else{
            swal({
                title: 'Registro incorrecto',
                text: respuesta.msg,
                type: 'error',
                confirmButtonText: 'Entendido'
              });
        }
        mostrarListaLibros();  
    }
  
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

function mostrarEditoriales(){
    let listaEditoriales = listar_editoriales();
    let selectEditorial = document.querySelector('#lstEditorial');
    for(let i=0; i < listaEditoriales.length; i++){
        let nuevaOpcion = new Option(listaEditoriales[i][0]);
        nuevaOpcion.value = listaEditoriales[i][0];
        selectEditorial.appendChild(nuevaOpcion);
    }
};
const input = document.getElementById('ingresarTarea');
const boton = document.querySelector('button');
const lista = document.getElementById('ListaGeneral')

function agregarTarea(){
    if(input.value){
        //TAREA NUEVA
        let tareaNueva=document.createElement('div');
        tareaNueva.classList.add('tarea');
        //TEXTO INGRESADO POR EL USUARIO
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
        // CREAR Y AGREGAR ICONOS
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
        // ICONOS
        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-AgregarIcono')

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill', 'icono-eliminar')

        iconos.append(completar, eliminar);
        //AGREGAR TAREA
        lista.appendChild(tareaNueva);
    }
}
boton.addEventListener('click', agregarTarea);
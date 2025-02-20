const input = document.querySelector("#ingresarTarea");
const botonCreaTarea = document.querySelector("#creaTarea");
const listaTareas = document.querySelector("#listaTareas");
const listado = document.querySelector("#listado");

botonCreaTarea.addEventListener("click", creaTarea);

listaTareas.addEventListener("click", listarTareas);
/* listaTareas.addEventListener('contextmenu',( )=>{
    if(listado.style.display!='none'){

    }
})
 */
function listarTareas() {
  let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  listado.innerHTML = generaListadoTareas(taskList);
  if(listado.style.display==='block'){
    listado.style.display='none';
  }else{
    listado.style.display='block';
  }
}

function generaListadoTareas(notas) {
  let html = `
    <table style="border-collapse: collapse; border:solid 1px; padding: 5px;  margin:auto; margin-top:5px;">
        <tbody>
    `;
    notas.forEach((nota) => {
        const note = nota.task || "No se han generado tareas";
        html += `
            <tr>
                <td style="border-collapse: collapse; border:solid 1px; padding: 5px;">${note} 
                <button id="editarTarea"><i class="bi bi-pencil-square"></i></button>
                <button id="eliminarTarea"><i class="bi-trash3-fill"></i></button>
                </td>
            </tr>
        `;
    });
    html += `
            </tbody>
        </table>
    `;
    return html;
}

function creaTarea() {
  const task = {
    task: input.value.trim()
  };
  if (!task.task) {
    alert("Por favor ingrese una descripción para la tarea");
    return;
  }
  console.log("tarea a agregar", JSON.stringify(task));
  let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  taskList.push(task);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  alert("Tarea registrada con éxito");
  window.location.reload();
}

/* function agregarTarea(){
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
} */

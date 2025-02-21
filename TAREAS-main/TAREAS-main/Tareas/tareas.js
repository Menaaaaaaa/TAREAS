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
  notas.forEach((nota, index) => {
      const note = nota.task || "No se han generado tareas";

      html += `
          <tr>
              <td style="border-collapse: collapse; border:solid 1px; padding: 5px;">${note} 
              <button onclick="editarTarea(${index})"><i class="bi bi-pencil-square"></i></button>
              <button onclick="eliminarTarea(${index})"><i class="bi-trash3-fill"></i></button>
              <button onclick="tacharTarea(${index})"><i class="bi bi-check-square-fill"></i></button>
              </td>
          </tr>
      `;//El index ayuda a identificar que tarea se edita o elimina
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

function editarTarea(index) {
  // Obtiene la lista de tareas del localStorage
  let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  // Pedir una nueva descripción para la tarea
  const nuevaDescripcion = prompt("Edita la tarea:", taskList[index].task);
  // Actualizar la tarea en la posición requerida
  taskList[index].task = nuevaDescripcion.trim();//quita espacios vacios 
  // edición actualizada en localStorage
  localStorage.setItem("taskList", JSON.stringify(taskList));
  listarTareas();
}

function eliminarTarea(index) {
  let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  // Elimina la tarea en la posición requerida
  taskList.splice(index, 1); //elimina o remplaza 
  // elimina y actualiza el localStorage 
  localStorage.setItem("taskList", JSON.stringify(taskList));
  listarTareas();
}

function tacharTarea(index){
  let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  //si se completa se subraya, de lo contrario no pasa nada (debía ser un efecto visual pero no lo logre hacer)
  taskList[index].completar = !taskList[index].completar //refleja un boolean en el localStorage
  //establece si esta completa o no
  localStorage.setItem("taskList", JSON.stringify(taskList));
  listarTareas();
}



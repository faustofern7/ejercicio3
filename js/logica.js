function agregarTarea() {
  const tarea = document.getElementById("agregarTareaa");
  const tareaValidar = tarea.value.trim();

  if (tareaValidar !== "") {
    let listaTareas = document.getElementById("lista");
    let nuevaTarea = document.createElement("li");
    let textoTarea = document.createTextNode(tareaValidar);
    let botonEliminar = document.createElement("button");

    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.className = "btn btn-dark m-2";
    botonEliminar.onclick = function () {
      eliminarTarea(nuevaTarea);
    };
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    tarea.value = "";
  }
}
function eliminarTarea(tarea) {
  let listaTareas = document.getElementById("lista");
  listaTareas.removeChild(tarea);
}

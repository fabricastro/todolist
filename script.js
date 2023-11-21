const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector(".fa-plus-circle"); // Cambié el selector del botón
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineTrough = 'line-trough'
let id = 0

// agregar tarea
function agregarTarea(tarea, id, realizado, eliminado) {

  if(eliminado)

  const REALIZADO = realizado ?check :uncheck
  const LINE = realizado ?lineTrough :''

  const elemento = `
    <li>
    <i class="far ${REALIZADO}" data="realizado" id=${id}></i>
    <p class="text ${LINE}">${tarea}</p>
    <i class="fas fa-trash de" data="eliminado" id=${id}></i>
    </li>
    `;

  lista.insertAdjacentHTML("beforeend", elemento);
}

botonEnter.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
  }
  input.value = '';
  id++
});

document.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea);
    }
    input.value = '';
    id=++
  }
});

lista.addEventListener('click', function(event){
  const element = event.target
  const elementData = element.attributes.data.value
})
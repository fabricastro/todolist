const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#boton-enter");

//agregar tarea
function agregarTarea(tarea) {
  const elemento = `<i class="far fa-circle co" data="realizado" id="0"></i>
    <p class="text">${tarea}</p>
    <i class="fas fa-trash de" data="eliminado" id="0"></i>`;

    lista.insertAdjacentElement("beforeend",elemento)
}

botonEnter.addEventListener('click', ()=>{
  const tarea = input.value
  if(tarea) {
    agregarTarea(tarea)
  }
  
})

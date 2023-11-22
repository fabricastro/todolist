const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector(".fa-plus-circle"); // Cambié el selector del botón
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineTrough = 'line-trough'
let id
let LIST

//creacion de fecha

const FECHA = new Date()
fecha.innerHTML= FECHA.toLocaleDateString('es-MX', {weekday:'long', month:'short', day:'numeric'})

// agregar tarea
function agregarTarea(tarea, id, realizado, eliminado) {
  if (eliminado) {return}
    const REALIZADO = realizado ? check : uncheck;
    const LINE = realizado ? lineTrough : '';

    const elemento = `
      <li>
        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
        <p class="text ${LINE}">${tarea}</p>
        <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
      </li>
    `;

    lista.insertAdjacentHTML("beforeend", elemento);
  
}

//funcion tarea realizada

function tareaRealizada(element) {
  element.classList.toggle(check)
  element.classList.toggle(uncheck)
  element.parentNode.querySelector('.text').classList.toggle(lineTrough)
  LIST[element.id].realizado = LIST[element.id].realizado ?false :true
}

//funcion tarea eliminada

function tareaEliminada(element) {
  element.parentNode.parentNode.removeChild(element.parentNode)
  LIST[element.id].eliminado = true
}

botonEnter.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    LIST.push({
      nombre: tarea,
      id:id,
      realizado:false,
      eliminado:false
    })
  }
  localStorage.setItem('TODO', JSON.stringify(LIST))
  input.value = '';
  id++
});

document.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea);
      LIST.push({
        nombre: tarea,
        id:id,
        realizado:false,
        eliminado:false
      })
    }
    input.value = '';
    id++
    localStorage.setItem('TODO', JSON.stringify(LIST))
  }
});

lista.addEventListener('click', function(event){
  const element = event.target
  const elementData = element.attributes.data.value
  if(elementData==='realizado'){
    tareaRealizada(element)
  }
  else if (elementData==='eliminado'){
    tareaEliminada(element)
  }
  localStorage.setItem('TODO', JSON.stringify(LIST))
})

//local storage get item

let data = localStorage.getItem('TODO')
if(data){
  LIST=JSON.parse(data)
  id=LIST.length
  cargarLista(LIST)
}else {
  LIST = []
  id=0
}

function cargarLista(DATA) {
  DATA.forEach(function(i){
    agregarTarea(i.nombre,i.id,i.realizado,i.eliminado)
  })
}
/* Inputs */
let tarea = document.getElementById('tarea');
let encargado = document.getElementById('encargado');
let date = document.getElementById('date');
let textarea = document.getElementById('textarea');
let agregar = document.getElementById('agregar');
let actualizar = document.getElementById('actualizar');

/* Array */
let tareas =[ ];

/* Lista */
const lista = document.getElementById('lista');
const llenarLista = () => {
    if(localStorage.getItem('tareaLocalStorage')){ 
    tareas = JSON.parse(localStorage.getItem('tareaLocalStorage'));  
    }
    lista.innerHTML = ' ';
    tareas.forEach( (tarea) => {        
        lista.innerHTML += `
            <tr>
            <td>${tarea.tarea}</td>
            <td>${tarea.encargado}</td>
            <td>${tarea.fecha}</td>
            <td>${tarea.descripcion}</td>
            <td>
                <button type="button" class="btn btn-primary modifica" id=${tarea.id}>Editar</button>
            </td>
            <td>
                <button type="button" class="btn btn-danger eliminar" id=${tarea.id}  >Eliminar</button>
            </td>
            
            </tr>
            `;
    }); 

    const modButtons = Array.from(document.getElementsByClassName('btn btn-primary modifica')); //coleccion de botones HTML
    modButtons.forEach((modButton) => {
    modButton.addEventListener('click', (event)=>completarInput(event.target.id)); 
    
}); 

    const deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar')); //Coleccion de botones HTML
    deleteButtons.forEach((button) => {
    button.addEventListener('click', (event)=> eliminaUsuario(event.target.id));    
    
});   
    actualizar.addEventListener('click', (event)=>editar(event.target.getAttribute('elemento')));
    
}

const creaElemento = ( ) => {
    let newTarea = {
        id: Date.now(),
        tarea: tarea.value,
        encargado: encargado.value,
        fecha: date.value,
        descripcion: textarea.value
    }
    
    tareas.push(newTarea);
    /* localStorage.setItem('tareaLocalStorage' , JSON.stringify(tareas)); */
    console.log(tareas);
    llenarLista();
    tarea.value = '';
    encargado.value = '';
    date.value = '';
    textarea.value = '';
}

agregar.addEventListener('click', creaElemento);

function completarInput(id){
    actualizar.setAttribute('elemento', id);    
    let tareaEncontrada = tareas.find((tarea)=>tarea.id == id);       
    console.log(tareaEncontrada);
    tarea.value = tareaEncontrada.tarea;
    encargado.value = tareaEncontrada.encargado;
    date.value = tareaEncontrada.fecha;
    textarea.value = tareaEncontrada.descripcion; 
    
    /* localStorage.getItem('tareaLocalStorage' , JSON.stringify(tareas)); */   
       
}
 
llenarLista();

function editar(id){  
    tareas.forEach(tarea=>{
        if(tarea.id == id){
            tarea.tarea = tarea.value
            tarea.encargado = encargado.value
            tarea.fecha = date.value
            tarea.descripcion = textarea.value
        }
        
    })
    console.log(tareas); 
    llenarLista();    
    tarea.value = '';
    encargado.value = '';
    date.value = '';
    textarea.value = '';
}

function eliminaUsuario(id){
    /* console.log(id); */
   tareas = tareas.filter((tarea)=>tarea.id != id);
   localStorage.setItem('tareaLocalStorage' , JSON.stringify(tareas));
   console.log(tareas);
   llenarLista();
}


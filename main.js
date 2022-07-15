 //Seleccionar los elementos  inputs, fecha, y descripcion,  capturar sus datos, verificar si contienen datos

 //El boton agregar debe insertar los datos que contienen los elementos a la tabla donde se mostraran

 //Boton modificar devuelve los datos a el formulario para poder cambiar sus valores  debe existir un boton
 //Guardar que confirme los cambios y debe devolverlos a la tabla.

 //Boton eliminar debe borrar un elemento de la tabla.

const tarea = document.getElementById('tarea');
const encargado = document.getElementById('encargado');
const date = document.getElementById('date');
const textarea = document.getElementById('textarea');
const agregar = document.getElementById('agregar');


let tareas =[ ];

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
                <button type="button" class="btn btn-primary" id ="editar">Editar</button>
            </td>
            <td>
                <button type="button" class="btn btn-danger eliminar" id=${tarea.id}  >Eliminar</button>
            </td>
            
            </tr>
            `;
    }); 
    
    const deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'));
    deleteButtons.forEach((button) => {
    button.addEventListener('click', (event)=> eliminaUsuario(event.target.id));
    
});
    
}

llenarLista();

const creaElemento = ( ) => {

    let newTarea = {
        id: Date.now(),
        tarea: tarea.value,
        encargado: encargado.value,
        fecha: date.value,
        descripcion: textarea.value
    }
    /* tareas[newTarea.id] = newTarea; */

    tareas.push(newTarea);
    localStorage.setItem('tareaLocalStorage' , JSON.stringify(tareas));
    console.log(tareas);
    llenarLista();
}


agregar.addEventListener('click', creaElemento);


/* let btnsEliminar = document.getElementsByClassName */

/* const eliminaTareas = Array.from(document.getElementsByClassName('btn btn-danger eliminar'));
eliminaTareas.forEach((button) => {
    button.addEventListener('click', (event)=>eliminaUsuario(event.target.id));
}); */



function eliminaUsuario(id){
    /* console.log(id); */
   tareas = tareas.filter((tarea)=>tarea.id != id)
   localStorage.setItem('tareaLocalStorage' , JSON.stringify(tareas));
   
   /* localStorage.removeItem(id); */
    console.log(tareas);
    llenarLista();
}


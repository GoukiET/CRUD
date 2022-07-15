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

const lista = document.getElementById('lista');

let tareas =[ ];

const llenarLista = () => {
    let memoria = localStorage.getItem('tareaLocalStorage');
    /* if (memoria === null) */
    memoria = JSON.parse(memoria);
    
    tareas = memoria;
    console.log(memoria);
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
                <button type="button" class="btn btn-danger " id="eliminar">Eliminar</button>
            </td>
            
            </tr>
            `;
    });
    
}

llenarLista();

const creaElemento = ( ) => {

    let newTarea = {
        tarea: tarea.value,
        encargado: encargado.value,
        fecha: date.value,
        descripcion: textarea.value
    }

    tareas.push(newTarea);
    localStorage.setItem('tareaLocalStorage' , JSON.stringify(tareas));
    console.log(tareas);
    llenarLista();
}


agregar.addEventListener('click', creaElemento);





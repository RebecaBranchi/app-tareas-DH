//const { escribirJSON}= require('./tareas');
const archivoTareas = require('./tareas');

let accion = process.argv[2];
console.log(accion);

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        //microdesafio 1 
        //modificar funcionalidad de listar tareas con forEach
        let tareas = archivoTareas.leerJSON();
        tareas.forEach((tarea, index)=> console.log(index, '.', tarea.titulo, '-', tarea.estado));
     break;     
   
        //tarea 2.3
        //Crear un nuevo case que verifique si el argumento pasa por consola es crear
    case 'crear' :
        console.log('Una nueva tarea');
        let titulo = process.argv[3];
        let unaTarea = {
            titulo: titulo,
            estado: 'pendiente'
        } 
        archivoTareas.guardarTarea(unaTarea) 
        break;
        
    case 'filtrar' :
        console.log ('Filtrado de Tareas');
        let valorBuscado = process.argv[3];
        let listaDeTareas = archivoTareas.leerPorEstado(valorBuscado);
        listaDeTareas.forEach((tarea, index)=> console.log(index, '.', tarea.titulo, '-', tarea.estado));
        console.log(listaDeTareas);
        break;


    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}

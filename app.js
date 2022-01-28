process=require('process');

const funcionesDeTareas= require('./funcionesDeTareas.js');


let action=process.argv[2] && process.argv[2].toLowerCase();

switch(action){
	case "listar":
        let array=funcionesDeTareas.leerJson()
	for (var i = 0; i < array.length; i++) {
	console.log(`Tarea: ${array[i].titulo} \nEstado: ${array[i].estado}`)
            console.log("-----------------------------------------------------")
        }
    break;
    case "agregar":
        let titulo=process.argv[3];
        let estado=process.argv[4];
        funcionesDeTareas.agregarTarea(titulo,estado);
        console.log("Se agrego correctamente exitosa!")
    break;

    case undefined:
    console.log("atencion tienes que pasar una accion");
    break;

    default:
    console.log("no entiendo que quere hacer, ponete las pilas");


}

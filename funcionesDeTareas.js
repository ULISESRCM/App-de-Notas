const fs =require('fs');//llamo el modulo nativa de Nodejs/File System el cual me permeite la lectura y escritura de archivos de nuestra computadora
/*creamos un objeto de la siguiente estructura
let variable={
    {nombre/propiedad:codigo

    },
    {nombre/propiedad:codigo

    }
}*/

let funcionesDeTareas={
leerJson:function(){//esta prpopiedad se llama "leerJson" la cual contiene una funcion en su interior
	let tareasJson =fs.readFileSync('./tareas.json','utf-8');//damos uso al modulo File System con su metodo ".readFileSync()" el cual presisa la ruta del archivo al cual le daremos uso, en este caso Leer dicho archivo, para lugo ser guardado en la variable "tareasJson"
    let tareasParseadas=JSON.parse(tareasJson);//Usamos elObketo JSON el cual tiene 2 metodos ".parse()" y ".stringify()", usaremos el primero para combertir el archivo tareas.json a un array que puede ser usado en Js el cual queda guardado en tareasParseadas
    return tareasParseadas;//La funcion retorna un array con los datos que tenia "tareas.json"

},
agregarTarea: function (titulo, estado) {//esta propiedad se llama agregartarea, la cual contiene un funcion que recibe 2 parametros
    let nuevaTarea = {//se crea un objeto con propiedades iguales a las usamos en tareas.json
        titulo: titulo,
        estado: estado,
    }
    
    let tareasAnteriores = this.leerJson()//creamos la variable "tareasAnteriores" la cual recibe la lectura de "tareas.json" realizada con la propiedad leerJson que se encuentra en el mismo objeto sando uso a "this.leerJson" en lugar de "funcionesDeTareas.leerJson"
    
    tareasAnteriores.push(nuevaTarea)//aplicamos el metodo ".push()" de los Array , que nos permite agregar elementos al array en la ultima posicion pasandole como parametro la variable "nuevaTarea" que  contien los datos con formato de obejto que queremos agregar

    let nuevoJson = JSON.stringify(tareasAnteriores)//leemos el nuevo array y lo pasamos a formato Json
    fs.writeFileSync('./tareas.json', nuevoJson, 'utf-8')//agregamos los nuevos elementos Json(nuevoJson) a "tareas.json"
}
}
    

module.exports=funcionesDeTareas//aplicamos module.exports a la funcion creada para poder usarla donde la llamemos con un "require('funcionesDeTareas')"
const axios = require('axios')
//este archivo nos va a servir para poder exportar algunas funciones y luego cuando instale este módulo en otros proyectos poder importar estas funciones

const PI = 3.1415
const greet = (name) => 'Hello ' + name
const users = async () => {
   //hacemos una petición get de la API: https://jsonplaceholder.typicode.com/ y para hacer esta petición vamos a necesitar otro módulo como dependencia (módulos que otras personas han desarrollado), o sea cada módulo que creamos a su vez puede depender de otros módulos de otras personas. En este caso voy a depender de otro módulo que se llama axios, entonces voy a requerirlo en la línea 3 y luego necesito instalarlo en la consola con el comando 'npm i axios'
   const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
   //console.log(res) //hacemos esto para consultarlo en la consola y una vez consultado le pedimos que nos devuelva return res.data
   return res.data
}
//users() // ejecutamos la función y luego ejecutamos el archivo en la consola con el comando 'node src/index.js', hacemos esto para ver los resultados en consola y nos devuelve una promesa porque la petición es asíncrona, entonces escribimos async y await. Ejecutamos otra vez el archivo en la consola con el comando 'node src/index.js' y nos devuelve un objeto bastante grande y nos interesa la propiedad llamada data. Todo esto era para consultarlo en la consola. Ahora comentamos el console.log(res) de la línea 9 y le pedimos que nos devuelva return res.data
//si ahora queremos ver por consola lo que nos devuelve hacemos un console.log(users()) y nos devuelve otra promesa porque esta función depende de ejecutar async await
users().then(res => console.log(res)) //hacemos esto y nos devuelve la respuesta que es una lista con dos usuarios

//Así nuestro módulo ya está hecho y ahora tenemos que exportar estas dos funciones
//para exportar las funciones hacemos así:
module.exports = {
    users, //no importa el orden
    greet,
    PI
}
//ahora para poder subir un módulo a npm vamos a tener que crearnos una cuenta en npm, vamos a tener que subirlo a npm, primero tenemos que crear una cuenta en github en la consola con el comando 'npm adduser' o yendo a su página. Luego vamos a la página https://www.npmjs.com/~enriquesa y en nuestro perfil tenemos una lista de nuestros paquetes. Ahora escribimos en la consola 'npm whoami' para ver quien está en el proyecto y luego escribimos 'npm publish' para subir y publicar lo que podemos ver en nuestra página de https://www.npmjs.com/~enriquesa. 
//La información del package.json es la que aparece en npm. 
//El nombre del paquete que está en la primera línea del package.json tiene que ser único para no crear conflictos y para comprobarlo si ya existe un módulo con ese nombre lo buscamos en el apartado 'Buscar paquetes' de la página npm y si no existe lo podemos subir, si existe le ponemos otro nombre, no poner números porque npm lo reconoce como un spam. 
//Podemos cambiarle el número de versión desde la consola con el comando 'npm version 1.0.1' con el número de la versión que queremos crear, en este caso 1.0.1
//En description ponemos la descripción del proyecto
//En main le ponemos cual es el archivo principal del proyecto, en este caso está dentro de la carpeta src/index.js


//ahora para usar este módulo en otro proyecto, creamos otro proyecto, otro archivo, llamado npm_usar_modulo, lo abrimos en otra ventana e instalamos el módulo en la nueva consola con el comando: npm i npm_publicar_modulo
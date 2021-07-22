let mensaje = "Mensaje Variable";//Si comentariamos la variable mensaje nos muestra un error

try {
    document.writeln(mensaje);
    console.log(mensaje);
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
}
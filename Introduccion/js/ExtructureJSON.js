// ---- Estructura JSON Basica -----

const alumno = {
    nombre: "Kevin Santiago",
    apellido: "Jimenez Salamanca",
    edad: 17,
    nota: 7.5
};
alumno['nota']=5;// establece un valor nuevo
console.log(alumno);// muestar todo el array 
console.log(alumno.apellido);//muestar el atributo que yo quiera en este caso apellido
console.log(alumno['nombre']);// muestar el atributo que yo quiera en este caso nombre

//---- Estructura JSON COmpleja ----
const alumnos = [
    {
        nombre: "Kevin",
        apellido: "Santi",
        nota: 5
    },{
        nombre: "Maria",
        apellido: "Fernanda",
        nota: 7
    },{
        nombre: "Santiago",
        apellido: "Salamaca",
        nota: 9
    }
];


let alumnonuevo = {
    nombre: "Brayan",
    apellido: "Jimenez",
    nota: 10
};
alumnos.push(alumnonuevo);//Agrega un nuevo objeto al array
console.log(alumnos);

//Recorrer JSON
for (let i = 0; i < alumnos.length; i++) {
    document.writeln(alumnos[i].nombre);
}
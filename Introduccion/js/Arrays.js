const numbers = [];//Crear array sin valores


const colors = ['Rojo','Amarillo','Azul','Verde','Naraja'];//Crear array con valores



const six = new Array(10).fill(6);//Crear array con el mismo valor en la msma celda

six.push(10);//Añadir objeto al array
six.shift();//Elimina el primer objeto

console.log(colors.slice(1,2,3));//muestraParte de un array

for (let i = 0; i < six.length; i++) {
    document.writeln(six[i]);
}

//recorrer array colors
for(color of colors){
    console.log(color);
}

for(i in colors){
    document.writeln(i);// muestra los indices del array 
    document.writeln(colors[i]);//muestr el indice y su valor
}

colors.reverse();
let number = prompt("Dime un numero entero: ")
number = parseInt(number);

if (number>0) {
    document.writeln("El numero es mayor que 0");
}else if (number<0) {
    document.writeln("El numero es menor que 0");
}else{
    document.writeln("El numero es igual a 0")
}
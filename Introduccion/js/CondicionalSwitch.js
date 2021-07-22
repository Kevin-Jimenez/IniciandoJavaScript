console.log("Digite una opcion");
console.log("1. Cragar\n");
console.log("2. Imprimir\n");
console.log("3. Salir\n");
option = parseInt(prompt("Opcion: "));

switch (option) {
    case 1:
        document.writeln("<br/>Cargando...")
        break;
    case 2:
        document.writeln("<br/>Imprimiendo...")
        break;
    case 3:
        document.writeln("<br/>Salindo...")
        break;
    default:
        document.writeln("<br/>Lo siento, se equivoco de menu")
        break;
}
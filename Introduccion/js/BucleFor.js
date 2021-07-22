// let name = prompt("Digita tu nombre");
// let rep = parseInt(prompt("Cuantas veces quiere que se muestre tu nombre"));

// for (let i = 0; i < rep; i++) {
//     document.writeln("<br/>Tu Nombre es: ",name);
    
// }
let table = parseInt(prompt("Digite la tabla que quiere saber"));
document.writeln("<strong>La tabla del ",table ," Es:<strong/>");

for (let i = 0; i<=10; i++) {
    document.writeln("<br/>",table," * ",i," = ",table*i)
    
}
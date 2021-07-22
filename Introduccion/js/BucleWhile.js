let table = parseInt(prompt("Digite la tabla que quiere saber"));
document.writeln("La tabla del ",table," es");

let i=0;
while (i<=10) {
    result = table * i;
    document.writeln("<br/>",table, " * ", i, " = ", table*i);
    i++;
}
let table = parseInt(prompt("Digite la tabla que desea saber"));
document.writeln("La tabla del ",table," es");
let i =0;
do {
    result = table * i;
    document.writeln("<br/>",table, " * ", i, " = ", table*i);
    i++;
} while (i<=10);
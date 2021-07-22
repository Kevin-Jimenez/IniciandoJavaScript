//funciones sin parametro y sin retorno de valor
function view(){
    document.writeln("Hola Baby");
}
view();

//Funcion con parametros

function viewParameter(nombre){
    document.writeln("<br/>Hola, ",nombre);
}
viewParameter("Kevin");

//funcion con retorno
function mayor(num1,num2){
    let mayor = 0;
    if (num1>num2) {
        mayor = num1;
    }else if (num2 > num1) {
        mayor = num2;
    }else{
        document.writeln("Son iguales");
    }
    return mayor;
}
document.writeln("<br/>", mayor(4,4));
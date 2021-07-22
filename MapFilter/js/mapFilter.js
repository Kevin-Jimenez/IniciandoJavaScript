const numbers = [2,3,4,1,2,3,7,6,9,10,34,21];
numbers.forEach(function(number){
    console.log(number*2);
});

//aplicar funcion a cada elemnto del array usando MAP
const duplica = numbers.map(function(number){
    return number * 2;
});
console.log('Usando MAP');
console.log(duplica);

//Extraer elemntos de cumplan con una condicion usando FILTER
const mayores = numbers.filter(function(number){
    return number > 10;
});
console.log("Usando Filter");
console.log(mayores);

//Devolver indice de valor coincidente
const indice = numbers.findIndex(function(number){
    return number === 10;
});
console.log("Usando FindIndex");
console.log(indice);

//Devolver indice de valor coincidente
const valor = numbers.find(function(number){
    return number === 10;
});
console.log("Usando Find");
console.log(valor);
window.onload = function(){
    let parrafos = document.getElementsByClassName('parrafo');//cuando hay varios
    console.log(parrafos);
    parrafos[1].style.background = 'green';

    let titulo = document.getElementById('titulo');
    titulo.innerHTML = "Desde JS";

    let boton = document.getElementById('boton');//cuando solo es 1
    boton.addEventListener('click',function(){
    console.log('Boton Pulsado');
    });
}


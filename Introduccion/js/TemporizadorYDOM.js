
window.onload = function(){
    let temporizador;
    let parrafo = document.getElementById('texto');
    let caja = document.getElementById('caja');
    let boton = document.getElementById('boton');

    function temporizadorUna(){
        temporizador = setTimeout(function(){
            console.log('Ejecutando Temporizador una sola vez');
        },2000);
    }
    function iniciaTemporizador(){
        temporizador = setInterval(function(){
            console.log('Ejecutando temporizador');
        },2000);
    }
    function mensaje(texto){
        parrafo.innerHTML=texto;
        caja.style.backgroundColor = caja.style.backgroundColor == 'blue' ? 'green' : 'blue';

    }


    function pararTemporizador(){
        clearInterval(temporizador);
        console.log('Temporizador parado');
    }
    iniciaTemporizador();
    boton.addEventListener('click',function(){
    console.log("Boton pulsado");
    mensaje('Temporizador parado');
    //temporizadorUna();
    pararTemporizador();
    });
}

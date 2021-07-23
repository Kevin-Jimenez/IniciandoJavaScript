window.onload = function(){
    console.log("***Ejercicio2***");
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);
    const n4 = parseFloat(document.getElementById('n4').value);
    const n5 = parseFloat(document.getElementById('n5').value);
    const text = document.getElementById('text');
    const boton = document.getElementById('boton');
    const respuesta = document.getElementById('respuesta');

    

    boton.addEventListener('click',()=>{
       const nfinal= parseFloat(n1) + parseFloat(n2) + parseFloat(n3)+ parseFloat(n4)+ parseFloat(n5);

        if (nfinal >= 0 || nfinal <= 30) {
            text.innerHTML = `Muy deficiente `+nfinal;
            respuesta.style.backgroudColor = respuesta.style.backgroudColor == 'gray' ? 'gray': 'red';
        }else if(nfinal >= 31 || nfinal <=50){
            text.innerHTML = `Insuficiente `+nfinal;
            respuesta.style.backgroudColor = respuesta.style.backgroudColor == 'gray' ? 'gray': 'red';
        }else if(nfinal >= 51 || nfinal <= 70){
            text.innerHTML = `Suficiente `+nfinal;
            respuesta.style.backgroudColor = respuesta.style.backgroudColor == 'gray' ? 'gray': 'green';
        }else if(nfinal >= 71 || nfinal <= 90){
            text.innerHTML = `Notable `+nfinal;
            respuesta.style.backgroudColor = respuesta.style.backgroudColor == 'gray' ? 'gray': 'green';
        }else if(nfinal >= 91 || nfinal <= 100){
            text.innerHTML = `Sobresalinete `+nfinal;
            respuesta.style.backgroudColor = respuesta.style.backgroudColor == 'gray' ? 'gray': 'green';
        }else{
            text.innerHTML = "Error";
        }
        console.log(nfinal.value);
    });
    
}

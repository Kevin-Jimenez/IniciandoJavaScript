window.onload = function(){
    console.log("*** Primer Ejrcicio ***");
    const username = document.getElementById('username');
    const age = document.getElementById('years');
    const boton = document.getElementById('boton');
    const text = document.getElementById('text');
    const div = document.getElementById('div');

    boton.addEventListener('click',()=>{
        if (age.value>= 18) {
            div.style.display = div.style.display == 'none' ? 'none' : 'block';
            text.innerHTML = `Felicitaciones ${username.value} ya puedes conducir`;
            div.style.backgroundColor = div.style.backgroundColor == 'yellow' ? 'blue' : 'green';
        } else {
            text.innerHTML = `Lo siento ${username.value} aun no puedes conducir`;
            div.style.display = div.style.display == 'none' ? 'none' : 'block';
            div.style.backgroundColor = div.style.backgroundColor == 'yellow' ? 'blue' : 'red';
        }
    })
}


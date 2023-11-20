console.log('sd')

let button = document.getElementById('buttom-ocultar');

button.onclick = ()=>{
    console.log("Hola Javascript del lado del cliente");
    let imageLogo = document.getElementById('hueso');
    imageLogo.style = 'display:none';
};


import panoramas from './app'

boton1.addEventListener('click', function () { 
    
    console.log("boton1");
    panoramas.salida_musica(); 
})

boton2.addEventListener('click', function () {
    console.log("boton2");
    panoramas.salida_cine(); 
})

boton3.addEventListener('click', function () {
    console.log("boton3");
    panoramas.salida_comida(); 
})
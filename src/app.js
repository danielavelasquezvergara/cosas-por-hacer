const panoramas = (() => {
 
    let musica_privada = () => {    
        resultado.innerHTML = ` <p>Sugerencia Música<p> 
        <div class= "video-responsive"><iframe width="560" height="315" src="https://www.youtube.com/embed/dqUdI4AIDF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    };
    
    let cine_privada = () => {    
        resultado.innerHTML = ` <p>Sugerencia Cine<p>
        <div class= "video-responsive"><iframe width="560" height="315" src="https://www.youtube.com/embed/RkDUkdVpfWk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    };
    
    let comida_privada = () => { 
        resultado.innerHTML = ` <p>Sugerencia Comida<p>
        <img src="http://www.recetasdetodoelmundo.com/documentos/195/308_FISH%20AND%20CHIPS.jpg" class="imgSelect">
        `;
    
    };
    return {
    
        salida_musica: () => {
            musica_privada();
        },
        
        salida_comida: () => { //Función pública panorama comida
            comida_privada();
        },

        salida_cine: () => { //Función pública panorama cine
            cine_privada();
        },
        
      

    };
})();

export default panoramas;
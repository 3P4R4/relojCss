window.addEventListener("DOMContentLoaded", function(e){

    const segundos = document.querySelector(".second-hand");
    const minutos = document.querySelector(".min-hand");
    const horas = document.querySelector(".hour-hand");

    function tiempo(){
        const now = new Date();
        const cadaSegundo = now.getSeconds();
        const segundoGrados = ((cadaSegundo / 60)* 360) + 90; //los 90 son los grados iniciales para que el segundero quede arriba en posición vertical
        segundos.style.transform = `rotate(${segundoGrados}deg)`;

        const cadaMinuto = now.getMinutes();
        const minutosGrados = ((cadaMinuto / 60)* 360) + 90; 
        minutos.style.transform = `rotate(${minutosGrados}deg)`;

        const cadaHora = now.getHours();
        const horaGrados = ((cadaHora / 12)* 360) + 90; 
        horas.style.transform = `rotate(${horaGrados}deg)`
    }

    setInterval(tiempo, 1000);

})
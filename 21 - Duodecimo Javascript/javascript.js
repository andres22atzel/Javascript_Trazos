
btnOpen.addEventListener("click",function(){
    modal.classList.add("activa");
});

btnClose.addEventListener("click",function(){

    modal.classList.add("claseDesaparecerModal");

    var timer= setTimeOut(function(){
        modal.classList.remove("activa");
    },2000);
});

var contador = 0;

// var temporizador = setInterval(function(){
//     console.log("Hola temporizador - interval:"+contador);
//     contador++;
// },1000);

var temporizadorDelBoton;
btnTemporizador.addEventListener("click",function(){
    temporizadorDelBoton = setInterval(function(){
        console.log("Temporizador")
    },1000);
});

btnPararTemporizador.addEventListener("click",function(){
    clearInterval(temporizadorDelBoton);
    console.log("Temporizador PARAR");
});


var agregar = document.querySelector("#agregar");
var sorteo = document.querySelector("#sorteo");
let nameContainer = document.querySelector("#nameContainer");
let temporizador;


agregar.addEventListener("click",function(){
    let nombre = document.querySelector("#nombre").value;
    let pTag = document.createElement("P");
    pTag.classList.add('name');
    pTag.classList.add('flex_row');
    pTag.innerHTML = nombre;
    nameContainer.appendChild(pTag);
});

sorteo.addEventListener("click",function(){
    let nombres = document.querySelectorAll('.name');
    let tamNombres = nombres.length;
    let randomNumber;
    let contador=0;
    let cantidadRandom = 4;
    clean(nombres);
    temporizador = setInterval(function(){
        if(tamNombres <= 10){
            randomNumber = (1 + Math.trunc((Math.random())*tamNombres));
        }else{
            randomNumber = Math.trunc( ((tamNombres-10)+1) + (Math.random())*tamNombres );
        }
        if(contador < cantidadRandom){
            nombres[randomNumber-1].classList.add('possibleWinner');
            setTimeout(function(){
                clean(nombres);
            },800);
            contador++;
        }else{
            nombres[randomNumber-1].classList.add('winner');
            clearInterval(temporizador);
        }
    },850);
    console.log(randomNumber);
});


function clean(item){
    for(let i = 0; i < item.length;i++){
        item[i].classList.remove('winner');
        item[i].classList.remove('possibleWinner');
    }
}

////setTimeout inside a for
// for(var i = 0;i < 5; i++){
//     let k = i;
//     setTimeout(function(){
//         console.log('count ', k);
//     }, 3000 * (k + 1));
// }

let numeros = document.querySelectorAll(".numero");
let intervalos = [];
let temporizador = [];
let contador = [];

for(let i = 0; i < numeros.length; i++){
    intervalos[i] = numeros[i].dataset.limitenumero;
    contador[i] = 0;
    temporizador[i]=(setInterval(function(){
        if(intervalos[i]>= contador[i]){
            numeros[i].innerHTML = contador[i];
            contador[i]++;
        }
    },100));
}

//Cronometro
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalMilisegundos = 99;
let intervalHoras = 23;
let interval = 59;
let item1 = document.querySelector('#milisegundos');
let item2 = document.querySelector('#segundos');
let item3 = document.querySelector('#minutos');
let item4 = document.querySelector('#horas');
let temp;
let timer = [];
let last;


zero(milisegundos,item1,1);
zero(segundos,item2,1);
zero(minutos,item3,1);
zero(horas,item4,1);

function crono(){
    temp=(setInterval(function(){
        if(intervalMilisegundos> milisegundos){
            zero(milisegundos,item1,1)
            milisegundos++;
        }else if(interval> segundos){
            milisegundos=0;
            segundos++;
            zero(segundos,item2,1);
            zero(milisegundos,item1,1);
        }else if(interval> minutos){
            milisegundos=0;
            segundos=0;
            minutos++;
            zero(minutos,item3,1);
            zero(segundos,item2,1);
            zero(milisegundos,item1,1);
        }else if(intervalHoras> horas){
            milisegundos=0;
            segundos=0;
            minutos=0;
            horas++;
            zero(horas,item4,1);
            zero(minutos,item3,1);
            zero(segundos,item2,1);
            zero(milisegundos,item1,1);
        }
    },10));
};



function zero(num,item,type){
    if(num <= 9 && type == 1){
        item.innerHTML = `0${num}`;
    }else{
        item.innerHTML = num;
    }
    if(num <= 9 && type == 2){
        return `0${num}`;
    }else{
        return  num;
    }
};
document.querySelector('#stop').disabled = false;
document.querySelector('#stop').disabled = true;
document.querySelector('#save').disabled = true;
document.querySelector('#restart').disabled = true;
document.querySelector('#erase').disabled = true;

document.querySelector('#start').addEventListener("click",function (){
    crono();
    enabled('start',false);
    enabled('stop',true);
    enabled('save',true);
    enabled('restart',false);
    enabled('erase',true);
});
document.querySelector('#stop').addEventListener("click",function (){
    clearInterval(temp);
    enabled('start',false);
    enabled('stop',false);
    enabled('save',false);
    enabled('restart',true);
    enabled('erase',true);
});

document.querySelector('#save').addEventListener("click",function (){
    let saveTime = `${zero(horas,false,2)} : ${zero(minutos,false,2)} : ${zero(segundos,false,2)} : ${zero(milisegundos,false,2)}`;
    timer.push(document.createElement("div"));
    last = timer.length-1;
    timer[last].classList.add("clockContainer");
    timer[last].classList.add("special");
    timer[last].appendChild(document.createElement("P"));
    timer[last].lastChild.innerHTML = saveTime;
    timer[last].lastChild.appendChild(document.createElement("IMG"));
    timer[last].lastChild.lastElementChild.setAttribute("src","img/close.svg");
    timer[last].lastChild.lastElementChild.addEventListener("click",function(){
        this.parentElement.parentElement.classList.add("hide");
    });
    tiempos.appendChild(timer[last]);
});

document.querySelector('#restart').addEventListener("click",function (){
    clearInterval(temp);
    crono();
    enabled('start',false);
    enabled('stop',true);
    enabled('save',true);
    enabled('restart',false);
    enabled('erase',true);
});

document.querySelector('#erase').addEventListener("click",function (){
    clearInterval(temp);
    horas=0;
    minutos=0;
    segundos=0;
    milisegundos=0;
    zero(milisegundos,item1,1);
    zero(segundos,item2,1);
    zero(minutos,item3,1);
    zero(horas,item4,1);
    enabled('start',true);
    enabled('stop',false);
    enabled('save',false);
    enabled('restart',false);
    enabled('erase',false);
    let pTags = document.querySelectorAll('.special');
    for(let i = 0; i < pTags.length; i++){
        pTags[i].remove();
        timer.pop();
    }
});

function enabled(item,boolean){
    if(boolean == false){
        document.querySelector(`#${item}`).disabled = true;
        document.querySelector(`#${item}`).classList.add("disabled");        
    }else{
        document.querySelector(`#${item}`).disabled = false;
        document.querySelector(`#${item}`).classList.remove("disabled");
    }
};


// var random = Math.random();

// //Aleatorio entre 0-10
// console.log(Math.trunc(random*10));
// //Aleatorio entre 10-20
// console.log(Math.trunc(10+(random*10)));
// //Aleatorio entre 7-15
// console.log(Math.trunc(7+(random*8)));



//clock

function centro(){
    let elementoCentro = document.querySelector('.hour-hand').getBoundingClientRect();
    let elementoCentroAnchura= elementoCentro.height;
    let hourHand = document.querySelector('.hour-hand div').getBoundingClientRect();
    let hourHandAltura= hourHand.height;
    console.log(hourHand);
    console.log(elementoCentroAnchura);
    console.log(hourHandAltura);
    let centroTop = (elementoCentroAnchura - hourHandAltura)/2;
    let centroLeft = (elementoCentroAnchura - hourHandAltura)/2;
    document.querySelector('.hour-hand div').style.bottom = centroTop+"px";
    console.log(document.querySelector('.hour-hand div').style.top = centroTop+"px");
}

centro();
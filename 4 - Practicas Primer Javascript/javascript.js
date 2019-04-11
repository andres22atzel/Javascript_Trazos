

function edad(entrada){
    var entrada = document.querySelector('#edad').value;
    var diferencia;

    if(entrada <= 0 ){
        resultado01.innerHTML = ("No has nacido");
    }
    else if (entrada > 0 && entrada <= 2){
        resultado01.innerHTML = ("Eres un Bebé");
        diferencia = 3 - entrada;
        resultado02.innerHTML = ("Te faltan "+diferencia+" años para llegar a ser niño");
    }
    else if (entrada > 2 && entrada <= 12){
        resultado01.innerHTML = ("Eres un Niño");
        diferencia = 13 - entrada;
        resultado02.innerHTML = ("Te faltan "+diferencia+" años para llegar a ser un adolescente");
    }
    else if (entrada > 12 && entrada <= 17){
        resultado01.innerHTML =("Eres un Adolescente");
        diferencia = 18 - entrada;
        resultado02.innerHTML = ("Te faltan "+diferencia+" años para llegar a ser un adulto");
    }
    else if (entrada >= 18 && entrada <= 65){
        resultado01.innerHTML = ("Eres un Adulto");
        diferencia = 66 - entrada;
        resultado02.innerHTML = ("Te faltan "+diferencia+" años para llegar a ser de la tercera edad");
    }
    else if (entrada > 65){
        resultado01.innerHTML = ("Eres de la Tercera edad");
        resultado02.innerHTML = ("");
    }
}

function calcular(){
    var primero = document.querySelector('#primero').value;
    var segundo = document.querySelector('#segundo').value;

    if(primero>segundo)
        resultado.innerHTML = (`El primer número (${primero}) es mayor que el segundo número (${segundo})`);
    else if(primero<segundo)
        resultado.innerHTML = (`El primer número (${primero}) es menor que el segundo número (${segundo})`);
    else if(primero=segundo)
        resultado.innerHTML = (`El primer número (${primero}) es igual al segundo número (${segundo})`);
}

function reset(){
    resultado.innerHTML = ("");
}
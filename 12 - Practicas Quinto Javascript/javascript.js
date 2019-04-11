var numeros = [0,0];

function sumaImpares(){
    var suma = 0;
    numeros[0] = parseInt(document.querySelector('#number01').value);
    numeros[1] = parseInt(document.querySelector('#number02').value);

    //  evaMayor();

    for(var i = numeros[0]; i <= numeros[1]; i++){
        if(i%2 != 0){
            suma += i;
        }
    }
    resultado.innerHTML = suma;
};

// function evaMayor(){
//     var numActual = 0;
//     var auxiliar = 0;
//     for(var a = 0; a < numeros.length; a++){
//         numActual = numeros[a];
//         for(var b = 0; b < numeros.length; b++){
//             if(numActual < numeros[b]){
//                 auxiliar = numeros [b];
//                 numeros[b] = numActual;
//                 numeros[b+1] = auxiliar;
//             }
//         }
//     }
//     console.table(numeros);
// }

comprobar();
function comprobar(){
    var array = [1,4,6,30,6,2,1,12,5,7];
    var posiciones = [];
    var result;
    var flag = false;
    var maxNumber = 0;
    var maxNumbers = [];

    for (var x = 0; x < array.length; x++){
        if(array[x]>10){
            posiciones.push(x);
            maxNumbers.push(array[x]);
            flag = true;
        }
    }
    console.table(posiciones);
    if(flag == true){
        result = "En el array hay números mayores a 10, y sus posiciones son:";
        for(var z = 0; z < maxNumbers.length;z++){
            for(var c = 0; c <maxNumbers.length; c++){
                if(maxNumbers[z]> maxNumbers[c]){
                    maxNumber = maxNumbers[z];
                }
            }
        }
        for(var y = 0; y < posiciones.length; y++){
            result+= `<br>${posiciones[y]}`;
        }
        result+= `<br> El numero maximo es: ${maxNumber}`
    }else{
        result = "En el array no hay números mayores a 10";
    }
    document.querySelector('#resultados').innerHTML = result;
};
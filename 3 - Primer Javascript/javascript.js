//EJECUCION DIRECTA

console.log("Soy el archivo de JS");
console.log("Soy la segunda fila");

//cambiar color del h1

var contador = 8;
// alert("alerta");

//punto de ruptura en la ejecucion del javascript con debugger
// debugger;

contador = 10;

var total = contador + 15;

console.log(contador);
console.log("Ultima linea");
console.log(total);

//La siguiente lineas en como se define una funcion
function saluda(nombre){
    //En la siguiente linea nombre es una variable que se crea automaticamente, toma el valor que estoy enviando por parametro en el llamado de esta funcion.
    alert("Hola Mundo "+nombre);
};

//La siguiente lineas en como se define el llamado de una funcion, la cual se ejecuta sin responder a un evento
//saluda("Luis");

//Siguiente lineas condicionales y bucles
var mayorEdad = true;

//Operador logico de igualdad en el siguiente if
if(mayorEdad == true)
    console.log("Puedes entrar");
else
    console.log("No puedes entrar");

for (var i = 0; i <=10; i++){
    console.log("@@@@@@@" + i);
}

//Siguiente lineas se ve el prompt y confirm
/*
var entrada = prompt("Introduce el nombre");
console.log("entrada");
console.log(entrada);

var confirmar = confirm("¿Estás seguro?");
console.log("confirmar");
console.log(confirmar)
*/


//Siguiente linea no se debe hacer NUNCA
document.write("Estoy escribiendo en el DOM");

//Siguiente linea es la forma correcta
resultados.innerHTML = "<h2>Estas es la mejor forma de escribir cosas en el DOM</h2>";

//ElementoFin -> Nodo de finResultado
var elementoFin = document.getElementById("finResultado");

//otra forma de obtener el elemento
var elementoFin = document.querySelector("#finResultado");

console.log(elementoFin);

elementoFin.style.color="red";
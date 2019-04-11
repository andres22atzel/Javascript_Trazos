//Tipo de dato Undefined
var variable;

//Tipo de dato numero
var numero = 3;

//Ver el tipo de dato de la variable
console.log(typeof(numero));

//Arreglo
var lista = ["melon","fresa","platano"]
console.log(lista);


var pelicula = "Titanic";
var director = "James Cameron";

var pelicula2 = "Toy Story";
var director2 = "Pixar";

//Objetos
var objPelicula = { 
    nombre:"Titanic",
    director:"James Cameron"
 };

 console.log(objPelicula);


 //Operadores matematicos y de asignacion
 var contador = 4;
 contador++;
 contador--;
 contador+=4;


 //Operador logico de distinto
 if (contador != 0){
     console.log(contador);
 }


 //Castin de datos
var numero01 = 30;
var numero02 = "5"

console.log(numero01 + numero02); //string
console.log(numero01 + (+numero02)); //numero
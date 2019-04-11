
var cadenaNumero = "2";
var numero = 2;

var resultado = numero + cadenaNumero;

var lista = [ "platano","fresa","melon","pera" ];

console.log("lista");
console.log(lista);

console.log("Primer elemento");
console.log(lista[0]);

//Con la siguiente linea se puede visualizar en consola una lista en forma de tabla
console.table(lista);

//Con la siguiente linea se ingresa un nuevo elemento a la lista al final
lista.push( "tomate" );
console.table(lista);

//Con la siguiente linea se subtrae el ultimo elemento de una lista
lista.pop();
console.table(lista);

//Con la siguiente linea se concatena en una cadena todos los elementos de la lista
console.log(lista.toString());

resultados.innerHTML = lista[0];

//Encadenando innerHTML
resultados.innerHTML = resultados.innerHTML + lista[1];
resultados.innerHTML += lista[2];

//Recorrido de lista con bucle
for(var i = 0; i < lista.length;i++){
    resultados.innerHTML += "<div>" + lista[i]+"</div>";
};


var letras = [ "a","e","i","o","u"  ]

//El siguiente bucle es otra forma de recorrer una lista sin utilizar indices
for ( var letra of letras ){
    console.log(letra);
}
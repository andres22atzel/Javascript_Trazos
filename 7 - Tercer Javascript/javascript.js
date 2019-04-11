
var persona = {
    nombre:"Pepe",
    apellido:"Perez"
};

//En la siguiente linea se especifica como obtener informacion de un objeto determinado
console.log(persona.nombre);


//Funciones
//Definir la funcion
function saluda(nombre, apellido){
    resultado.innerHTML = "Hola mundo "+nombre+" "+apellido;
}
//llamada a la funcion
saluda("Juan","Perez");

function cubo(numero){
    var res = numero*numero*numero;
    return res;
};

var cubo5 = cubo(5);
console.log("cubo5");
console.log(cubo5);

function escribeTexto(){
    var texto = "Estoy dentro de la funcion";
    resultado.innerHTML = texto;
}

escribeTexto();


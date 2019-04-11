
var pelicula = {
    nombre: "Avatar",
    director: {
        nombre:"James",
        apellido:"Cameron",
        nacimiento:"1960"
    }
}

console.log("El nombre del director es "+pelicula.director.nombre+pelicula.director.apellido);
console.log(`El nombre del director es ${pelicula.director.nombre} ${pelicula.director.apellido}`)

var pelicula2 = {
    nombre: "Titanic",
    director: "J.C.",
}

var pelicula3 = {
    nombre: "Avatar 2",
    director: "J.C.",
}

//set new value to property of object
pelicula.nombre = 'Toy Story';

console.log("pelicula");
console.log(pelicula);

//Llamado a valor de objeto pelicula
console.log(pelicula.nombre);
//Otro tipo de notacion para llamado de valor de atributo de un objeto
console.log(pelicula["nombre"]);

pelicula.fecha=1990;
console.log("La fecha es: "+pelicula.fecha);

var listaPeliculas = [pelicula,pelicula2,pelicula3];

console.log(listaPeliculas);

var persona= {
    nombre:"Pepe",
    apellido:"Jiménez",
    saluda: function(){
        muestra.innerHTML = "Buenas tardes "+persona.nombre+" "+this.apellido;
    }
};

persona.saluda();
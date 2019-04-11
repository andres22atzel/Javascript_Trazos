

var asignatura = {
    nombre: "Programacion Avanzada",
    fechaInicio: "03-20-2019",
    alumnosMatriculados: [
        {   nombre: "Andres",
            apellidos: "Garcia Pardo",
            anoNacimiento: "08-22-1989",
            edad: function(){
                return (age(this.anoNacimiento));
            }, 
            nota: 9.5
         },
        {   nombre: "Alex",
            apellidos: "Feng Gomez",
            anoNacimiento: "03-29-1992",
            edad: function(){
                return (age(this.anoNacimiento));
            },
            nota: 8
         },
        {   nombre: "Paula",
            apellidos: "Fernandez",
            anoNacimiento: "01-06-2000",
            edad: function(){
                return (age(this.anoNacimiento));
             } ,
            nota: 7
         },
    ],
    numAlumnosMatriculados: function(){
        return(this.alumnosMatriculados.length)
    },
    profesor:{
        nombre:"Luis",
        apellidos: "Jimenez Rodriguez",
        dni: "45612378",
        anoNacimiento: "03-29-1992",
        edad: function(){
           return (age(this.anoNacimiento));
        } 
    }
}

function age(edad){
    var birthday = new Date(edad);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function impresion(){
    var result = `<div class="bloqueProfesor"><p>La Asignatura es: <strong>${asignatura.nombre}</strong></p><p>El nombre del profesor es: ${asignatura.profesor.nombre} ${asignatura.profesor.apellidos}</p></div>`;
    for(var i = 0; i < asignatura.numAlumnosMatriculados();i++){
        result+=`<div class="bloqueAlumno" ><p>Nombre de alumno: ${asignatura.alumnosMatriculados[i].nombre} ${asignatura.alumnosMatriculados[i].apellidos}</p><p>Edad: ${asignatura.alumnosMatriculados[i].edad()}</p><p>Su nota es: ${asignatura.alumnosMatriculados[i].nota}</p></div>`;
    }
    document.querySelector('#resultado').innerHTML = result;
}


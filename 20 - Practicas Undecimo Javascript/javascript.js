
class Alumno{
    constructor(name,surname,birth){
        this.nombre = name;
        this.apellido=surname;
        this.edad = this.edad(birth);
    }

    edad(birth){
        let birthday = new Date(birth);
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }

}
let alumnos = [];
let blockStructura = "";

insertar.addEventListener("click",function(){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let birth = document.querySelector("#birth").value;

    alumnos.push(new Alumno(nombre,apellido,birth));
    let last = alumnos.length-1;
    blockStructura += `<div class="card"><p class="nombre">${alumnos[last].nombre} ${alumnos[last].apellido}</p><h2>Edad</h2><p class="edad">${alumnos[last].edad}</p></div>`;

    alumnoCard.innerHTML = blockStructura;
    if(alumnos.length >= 2)
        order.classList.remove("hide");
});

order.addEventListener("click",function(){
    var resultado = alumnos.sort(function (a, b) {
        let fullNameA = `${a.nombre} ${a.apellido}`;
        console.log(fullNameA);
        let fullNameB = `${b.nombre} ${b.apellido}`;
        console.log(fullNameB);
        if (fullNameA > fullNameB) {
          return 1;
        }
        if (fullNameA < fullNameB) {
          return -1;
        }
        if(fullNameA == fullNameB && (a.edad-b.edad)>0){
            return 1;
        }
        if(fullNameA == fullNameB && (a.edad-b.edad)<0){
            return -1;
        }
        // a must be equal to b
        return 0;
      });
    blockStructura = "";
    for(let i = 0; i < resultado.length; i++){
        blockStructura += `<div class="card"><p class="nombre">${resultado[i].nombre} ${resultado[i].apellido}</p><h2>Edad</h2><p class="edad">${resultado[i].edad}</p></div>`;
    }
    alumnoCard.innerHTML = blockStructura;
    console.log(resultado);
});


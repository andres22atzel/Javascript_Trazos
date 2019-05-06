
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

verificarArreglo();

function verificarArreglo(){
    let alumnosStorage = getAlumnosLocalStorage();
    if(alumnosStorage != null){
        alumnos = getAlumnosLocalStorage();
        if(alumnos.length >= 2)
        order.classList.remove("hide");
    }
}

console.log(alumnos);

insertar.addEventListener("click",function(){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let birth = document.querySelector("#birth").value;

    alumnos.push(new Alumno(nombre,apellido,birth));
    setAlumnosLocalStorage(alumnos);
    let last = alumnos.length-1;
    // blockStructura += `<div class="card"><p class="nombre">${alumnos[last].nombre} ${alumnos[last].apellido}</p><h2>Edad</h2><p class="edad">${alumnos[last].edad}</p></div>`;
    addAlumnos(last);
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
    // blockStructura = "";
    alumnoCard.innerHTML = ""; 
    for(let i = 0; i < resultado.length; i++){
        // blockStructura += `<div class="card"><p class="nombre">${resultado[i].nombre} ${resultado[i].apellido}</p><h2>Edad</h2><p class="edad">${resultado[i].edad}</p></div>`;
        addAlumnos(i);
    }
    // alumnoCard.innerHTML = blockStructura;
    console.log(resultado);
});

function setAlumnosLocalStorage(alumnos){
    let arrAlumnos = JSON.stringify(alumnos);
    localStorage.setItem("Alumnos",arrAlumnos);
}

function getAlumnosLocalStorage(){
    return JSON.parse(localStorage.getItem("Alumnos"));;
}

for(let i = 0; i < alumnos.length;i++){
    addAlumnos(i);
}


function addAlumnos(i){
    let alumnoCard = document.querySelector("#alumnoCard");
    let divElement = document.createElement("div");
    let pFirstElement = document.createElement("p");
    let pSecondElement = document.createElement("p");
    let h2Element = document.createElement("h2");
    divElement.classList.add("card");
    pSecondElement.classList.add("edad");
    pFirstElement.innerHTML = `${alumnos[i].nombre} ${alumnos[i].apellido}`;
    pSecondElement.innerHTML = `${alumnos[i].edad}`;
    divElement.appendChild(pFirstElement);
    divElement.appendChild(h2Element);
    divElement.appendChild(pSecondElement);
    alumnoCard.appendChild(divElement);
    console.log(divElement);
};

borrar.addEventListener("click",function(){
    localStorage.removeItem("Alumnos");
    for(let i = 0; i < alumnos.length;i++){
        alumnos[i] = null;
    }
    alumnoCard.innerHTML = "";
});
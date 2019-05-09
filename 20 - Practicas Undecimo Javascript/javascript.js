class Alumno {
  constructor(name, surname, birth) {
    this.nombre = name;
    this.apellido = surname;
    this.edad = this.edad(birth);
  }

  edad(birth) {
    let birthday = new Date(birth);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
let alumnos = [];
let valorFechaNacimiento = "";
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

verificarArreglo();

function verificarArreglo() {
  let alumnosStorage = getAlumnosLocalStorage();
  if (alumnosStorage != null) {
    alumnos = getAlumnosLocalStorage();
    if (alumnos.length >= 2) {
      order.classList.remove("hide");
    }
    if (alumnos.length >= 1) {
      borrar.classList.remove("hide");
    }
  }
}

insertar.addEventListener("click", function() {
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let birth = document.querySelector("#birth").value;
  if(format.test(nombre)===true || format.test(apellido)===true){
    console.log("entro");
    // alert("Ingrese un nombre o apellido válido");
  }else if (validarFecha() === 0) {
    alert("Ingresar un año valido");
  } else if (validarFecha() === 1) {
    alert("Ingresar un mes valido para el año");
  } else if (validarFecha() === 2) {
    alert("Ingresar un dia valido para el mes");
  } else if (validarFecha() === 3 && nombre) {
    alumnos.push(new Alumno(nombre, apellido, birth));
    setAlumnosLocalStorage(alumnos);
    let last = alumnos.length - 1;
    addAlumnos(last);
    if (alumnos.length >= 2) {
      order.classList.remove("hide");
    }
    if (alumnos.length >= 1) {
      borrar.classList.remove("hide");
    }
    birth.value = "";
    valorFechaNacimiento = "";
  }
});

order.addEventListener("click", function() {
  var resultado = alumnos.sort(function(a, b) {
    let fullNameA = `${a.nombre} ${a.apellido}`;
    let fullNameB = `${b.nombre} ${b.apellido}`;
    if (fullNameA > fullNameB) {
      return 1;
    }
    if (fullNameA < fullNameB) {
      return -1;
    }
    if (fullNameA == fullNameB && a.edad - b.edad > 0) {
      return 1;
    }
    if (fullNameA == fullNameB && a.edad - b.edad < 0) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  // blockStructura = "";
  alumnoCard.innerHTML = "";
  for (let i = 0; i < resultado.length; i++) {
    // blockStructura += `<div class="card"><p class="nombre">${resultado[i].nombre} ${resultado[i].apellido}</p><h2>Edad</h2><p class="edad">${resultado[i].edad}</p></div>`;
    addAlumnos(i);
  }
  // alumnoCard.innerHTML = blockStructura;
});

function setAlumnosLocalStorage(alumnos) {
  let arrAlumnos = JSON.stringify(alumnos);
  localStorage.setItem("Alumnos", arrAlumnos);
}

function getAlumnosLocalStorage() {
  return JSON.parse(localStorage.getItem("Alumnos"));
}

for (let i = 0; i < alumnos.length; i++) {
  addAlumnos(i);
}

function addAlumnos(i) {
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
}

borrar.addEventListener("click", function() {
  localStorage.removeItem("Alumnos");
  for (let i = 0; i <= alumnos.length; i++) {
    alumnos.pop();
  }
  alumnoCard.innerHTML = "";
  order.classList.add("hide");
  borrar.classList.add("hide");
  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
  document.querySelector("#birth").value = "";
});

function verificarFecha(birth) {
  let mes = parseInt(birth.slice(0, 2));
  let dia = birth.slice(3, 5);
  let año = birth.slice(6, 10);
  if (mes > 0 && mes <= 12) {
    return toString(mes + "/");
  }
  console.log(mes);
  console.log(dia);
  console.log(año);
}

document.querySelector("#birth").addEventListener("keyup", function(e) {
  let fecha = this.value.length;
  let year;

  if (e.key === "Backspace" && fecha === 2) {
    valorFechaNacimiento = "";
    this.value = valorFechaNacimiento;
  }else if (this.value.slice(1, 2) === "/"){
    valorFechaNacimiento += `0${this.value.slice(0, 1)}/`;
    this.value = valorFechaNacimiento;
  } else if (fecha === 2) {
    valorFechaNacimiento += `${this.value}/`;
    this.value = valorFechaNacimiento;
  } else if (this.value > 3 && fecha === 1) {
    valorFechaNacimiento += `0${this.value}/`;
    this.value = valorFechaNacimiento;
  }

  if (e.key === "Backspace" && fecha === 5) {
    valorFechaNacimiento = valorFechaNacimiento.slice(0, 3);
    this.value = valorFechaNacimiento;
  } else if (this.value.slice(3, 4) > 1 && fecha === 4) {
    valorFechaNacimiento += `0${this.value.slice(3, 4)}/`;
    this.value = valorFechaNacimiento;
  } else if (this.value.slice(4, 5) === "/"){
    valorFechaNacimiento += `0${this.value.slice(3, 4)}/`;
    this.value = valorFechaNacimiento;
  }else if (fecha === 5) {
    valorFechaNacimiento += `${this.value.slice(3, 5)}/`;
    this.value = "";
    this.value = valorFechaNacimiento;
  } 

  if (e.key === "Backspace" && fecha === 9) {
    valorFechaNacimiento = valorFechaNacimiento.slice(0, 6);
    this.value = valorFechaNacimiento;
  } else if (fecha === 8) {
    year = parseInt(this.value.slice(6, 8));
    if (year > 30) {
      valorFechaNacimiento += `19${this.value.slice(6, 8)}`;
    } else {
      valorFechaNacimiento += `20${this.value.slice(6, 8)}`;
    }
    this.value = "";
    this.value = valorFechaNacimiento;
  }
});

function validarFecha() {
  let day = document.querySelector("#birth").value.slice(0, 2);
  let month = document.querySelector("#birth").value.slice(3, 5);
  let year = document.querySelector("#birth").value.slice(6, 10);
  let diasMeses = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayIndex;
  let presentDate = new Date();
  let presentYear = presentDate.getFullYear();
  if (year > 1900 && year <= presentYear) {
    if ((year % 4 == 0 || year % 400 == 0) && year % 100 != 0) {
      diasMeses[1] = 29;
    } else {
      diasMeses[1] = 28;
    }
  } else {
    return 0;
  }
  if (month > 0 && month <= 12) {
    dayIndex = month - 1;
  } else {
    return 1;
  }
  if (day > 0 && day <= diasMeses[dayIndex]) {
    return 3;
  } else {
    return 2;
  }
}

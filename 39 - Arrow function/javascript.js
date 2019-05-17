var columnas = document.querySelectorAll(".columna");

// // Funcion convencional
// for(let element of columnas){
//     element.addEventListener("click",function(){
//         console.log("Hola Mundo");
//         console.log(this);
//         element.style.color="red";
//     });
// }

// //Funcion flecha
// for(let element of columnas){
//     element.addEventListener("click",()=>{
//         console.log("Hola Mundo");
//         console.log(element);
//         element.style.color="blue";
//     });
// }

function calculaCosasComplejas(){
    let resultado = 0;
    let vaMal = true;
    // 1-5 seg;
    let miPromesa = new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("He terminado")
            resultado = 100;
            if(vaMal){
                reject("Dura Mucho");
            }else{
                resolve(resultado);
            }
        },1000);
        //
    });
        return miPromesa;
};


//PROMESA
var area = calculaCosasComplejas();
area.then(respuesta =>{
    console.log("He terminado");
    console.log(area)
    resultadoDiv.innerHTML = respuesta;
    console.log("PINTADO");
}).catch(
    error=>{
        console.log(area)
        resultadoDiv.innerHTML = error;
});


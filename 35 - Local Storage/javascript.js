var arrCoches = [ 
    {marca:"Peugeot",color:"rojo"},
    {marca:"Mercedes",color:"azul"},
    {marca:"BMW",color:"verde"},
    {marca:"Renault",color:"negro"},
];

var arrMotos = [ 
    {marca:"YAMAHA",color:"rojo"},
    {marca:"BMW",color:"azul"},
    {marca:"SUZUKI",color:"verde"},
    {marca:"Harley Davidson",color:"negro"},
];


//ocalStorage.setItem("Coches",arrCoches[i].marca);

console.log(arrCoches);
var jsonCoches = JSON.stringify(arrCoches);
var jsonMotos = JSON.stringify(arrMotos);
console.log(jsonCoches);
localStorage.setItem("Coches",jsonCoches);
localStorage.setItem("Motos",jsonMotos);
localStorage.setItem("Bici","Renault");

var newArrCoches = JSON.parse(localStorage.getItem("Motos"));
// console.log("valorCoches")
// console.log(valorCoches)
console.log(newArrCoches)
 $("#principal").html(newArrCoches[3].marca)


 //Clase AJAX
let arrColores = [];
if(localStorage.getItem("colores") != null){
    let jsonArrColores = localStorage.getItem("colores");
    arrColores = JSON.parse(jsonArrColores);
}
// for(let i = 0; i<arrColores.length;i++){
//     addColor();
// }
pintarTodosLosColores();
function pintarTodosLosColores(){
    if(arrColores != null){
    for(let i = 0; i < arrColores.length; i++){
        let divHijoJQ = $("<div></div>");
        divHijoJQ.addClass("hijoColor");
        divHijoJQ.text(arrColores[i]);
        divHijoJQ.css({
            "color":arrColores[i]
        });
        $("#gridColores").append(divHijoJQ);
    }
    }
};

 $("#btnAdd").on({
     click:function(){
        addColor();
        actualizarLocalStorage();
     }
 });

 function addColor(){
     let colorValue = $("#color").val();
     arrColores.push(colorValue);
     console.log(arrColores);
     let divHijoJQ = $("<div></div>");
     divHijoJQ.addClass("hijoColor");
     divHijoJQ.text(colorValue);
     divHijoJQ.css({
         "color":colorValue
     });

     $("#gridColores").append(divHijoJQ);
 };

 function actualizarLocalStorage(){
    let jsonArrColores = JSON.stringify(arrColores);
    localStorage.setItem("colores",jsonArrColores);
 }; 
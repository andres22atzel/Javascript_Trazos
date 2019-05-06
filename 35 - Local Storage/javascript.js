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
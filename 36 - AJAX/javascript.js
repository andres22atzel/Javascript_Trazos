console.log("AJAX");
//AJAX Javascript
var http = new XMLHttpRequest();
var metodo = "GET";
var miUrl = "https://pokeapi.co/api/v2/pokemon/";
let backCount=0;

// //Abres conexion con el servidor
// http.open(metodo,miUrl,true);

// //Para que la peticion nos avise cuando cambie su estado [Bien,Error,Cargando...]
// http.onreadystatechange = function(){
//     // console.log("El estado de la conexión");
//     // console.log(this.readyState);
//     // console.log("El estado de petición");
//     // console.log(this.status);
//     // console.log("Cuerpo de la respuesta");
//     // console.log(this.responseText);

//     // if(this.readyState === 4 && this.status === 200){

//     // }
//     if(this.readyState === 4){
//         if(this.status === 200){
//             //ok todo bien
//             //respuesta es texto o JSON
//             console.log(this.responseText);
//             console.log(typeof(this.responseText));
//             // JSON -> Objeto
//             let respuesta = JSON.parse(this.responseText);
//             console.log(respuesta.count);
//             pokemonCount.innerHTML = respuesta.count;
//         }else if (this.status === 404){
//             alert("NOT FOUND");
//         }//no se encuentra tu contenido
//     }
// };

// http.send();

//AJAX JQuery
let pokemonList = [];
let dataPokemon;
infoAJAX();
function infoAJAX(){
    $.ajax({
        url:miUrl,
        method:metodo,
        success: function(data){
            console.log("Ok JQuery AJAX");
            $(pokemonCount).text(data.count);
            $(".pokemon").html(data.results[0].name);
            dataPokemon = data;
            pokemonList = data.results;
            displayAllPokemon();
        },
        error:function(error){
            console.log("ERROR JQuery AJAX");
            console.log(error);
        } 
    });
}

function displayAllPokemon(){
    for(let i = 0; i < pokemonList.length; i++){
        let childDivElement = document.createElement("div");
        childDivElement.classList.add("pokemon");
        $("#gridPokemon").append(childDivElement);
        $(childDivElement).text(pokemonList[i].name);
    }
};

$("#load").on({
    click:function(){
        backCount++;
        console.log(dataPokemon.next);
        miUrl=dataPokemon.next;
        $("#gridPokemon").empty();
        infoAJAX();
        $("#back").removeClass("hide");
        console.log(backCount);
    }
});
$("#back").on({
    click:function(){
        backCount--;
        console.log(dataPokemon.next);
        miUrl=dataPokemon.previous;
        $("#gridPokemon").empty();
        infoAJAX();
        if(backCount != 0){
            $("#back").removeClass("hide");
        }else{
            $("#back").addClass("hide");
        }
        console.log(backCount);
    }
});
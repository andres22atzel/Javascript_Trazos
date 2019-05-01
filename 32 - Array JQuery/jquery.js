
$(document).ready(function(){
var lista = ["platano","fresa","naranja","manzana"]
for(var i= 0;i<lista.length;i++){
    console.log(lista[i]);
};
$('.columna').css({
    "color":"green"
})
var texto = $(".columna").text();
console.log(texto);
console.log($($('.columna')[0]));

//each es como el for para recorrer una array
$(".columna").each(function(indice,valor){
    console.log(indice," ",valor);
});

$.each(lista,function(i,v){
    console.log(v);
});

});

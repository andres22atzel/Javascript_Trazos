
var radio;
var pi = Math.PI;
var diametro;
var area;
var perimetro;
var contador = 1;
var numero;
var calculo = 1;

function calculos(){
    radio = document.querySelector('input[type="text"]').value;
    diametro = diametro(radio);
    area = area(radio);
    perimetro = perimetro(radio);
    resultado.innerHTML = ("El diámetro del círculo es: "+diametro+"<br>"+"El Área del círculo es: "+area+"<br>"+"El perímetro del círculo es: "+perimetro);
}

function diametro(radio){
    diametro = 2*radio;
    return diametro;
}

function area(radio){
    area = (2*pi*Math.pow(radio,2)).toFixed(3);
    return area;
}

function perimetro(radio){
    perimetro = (2*pi*radio).toFixed(3);
    return perimetro;
}

function calcPrecios(){
    var precio = document.querySelector('input[type="text"]').value;
    var tax;
    var shipping;
    var total;
    var redondeo;
    introducir("base",parseFloat(precio).toFixed(2));
    tax = impuesto(parseFloat(precio));
    introducir("tax",tax.toFixed(2));
    shipping = envio(parseFloat(precio));
    introducir("envio",shipping)
    total= tax+shipping;
    introducir("total",total.toFixed(2));
    document.querySelector("#tabla").classList.remove("hide");
    document.querySelector("#tabla").classList.add("show");
}

function impuesto(precio){
    return((precio*0.21)+parseFloat(precio));
}

function envio(precio){
    if(precio < 50)
        return(10);
    else
        return(0);
}

function introducir(item,monto){
    document.querySelector(`#${item}`).innerHTML = (`${monto} €`)
}

//cambiar esto solo con funciones
function factorial(){
    var numero = document.querySelector("#factorial").value;
    var calculo = 1;

    for(var i = 1; i <= numero; i++){
        calculo = calculo * i;
    }
    
    document.querySelector("#resultado").innerHTML = ("El factorial del número "+numero+" es: "+calculo);
    calculo = 1;
}

function factorialCall(){
    numero = document.querySelector("#factorial").value;
    factorialSinFor(contador);
}

function factorialSinFor(contador){
    console.log(contador);
    console.log(calculo);
    if(contador<=numero){
        calculo = calculo * contador;
        contador++;
        return(factorialSinFor(contador));
    }else{
        document.querySelector("#resultado").innerHTML = ("El factorial del número "+numero+" es: "+calculo);
        contador = 1;
        calculo = 1;
    }
}
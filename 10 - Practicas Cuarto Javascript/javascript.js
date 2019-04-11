
function par(){
    var numero = document.querySelector('#par').value;
    var string;
    var resultado = document.querySelector('#resultado');

    if(numero%2 == 0){
        string = (`El número (${numero}) introducido es par <br>`);
    }else{
        string = (`El número (${numero}) introducido no es par <br>`);
    }

    if(numero%3 == 0){
        string = string + (`El número (${numero}) es multiplo del 3 <br>`);
    }
    if (numero%7 == 0){
        string = string + (`El número (${numero}) es multiplo del 7 <br>`);
    }

    resultado.innerHTML = (string);

};

var array_root =[0,false];
function ecuacion(){
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    var c = document.querySelector('#c').value;
    var x1;
    var x2;
    var xsub1;
    var xsub2;
    var resultado = document.querySelector('#resultado');
    var root_square;

    if( a != 0 ){
        raiz(a,b,c);
        root_square = parseFloat(array_root[0]);
        if(array_root[1]==false){
            x1 = ((b*(-1)) + root_square)/(2*a);
            x2 = ((b*(-1)) - root_square)/(2*a);
            resultado.innerHTML = (`Los resultados de la ecuación son:<br>X1 = ${x1}<br>X2 = ${x2}`);
        }else{
            xsub1=(b*(-1));
            xsub2=2*a;
            resultado.innerHTML = (`Los resultados de la ecuación son:<br>X1 = ${xsub1} + ${root_square}i / ${xsub2} <br>X2 = ${xsub1} - ${root_square}i / ${xsub2} `);
            array_root[1]= false;
        }

    }else if(b!=0){
        x1 = -(c)/b;
        resultado.innerHTML = (`Los resultados de la ecuación son:<br>X1 = ${x1}`);
    }else{
        resultado.innerHTML = ("No hay soluciones");
    }

};

function raiz(a,b,c){
    var evaluacion = Math.pow(b,2) - (4 * (a*c));
    console.log(evaluacion);
    var result;
    if(evaluacion < 0){
        result = evaluacion*(-1);
        array_root[0]= Math.sqrt( result ).toFixed(2);
        array_root[1]= true;
    }else{
        array_root[0]= Math.sqrt( evaluacion ).toFixed(2);
    }
}

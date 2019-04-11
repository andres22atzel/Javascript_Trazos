
function letraDNI(){
    var dni = parseInt(document.querySelector('#dni').value);
    var letra = (document.querySelector('#letra').value).toUpperCase();
    var posLetra;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    if(dni>0 && dni<99999999){
        posLetra = dni%23;
        if (letras[posLetra] == letra){
            document.querySelector('#result').innerHTML = ("Letra correcta");
        }else{
            document.querySelector('#result').innerHTML = ("Letra incorrecta");
        }
    }else{
        document.querySelector('#result').innerHTML = ("Número proporcionado no es válido")
    }
}

function tablaMultiplicar(){
    var tabla= '';
    for(var i = 1; i < 10; i++){
        tabla += `<div class="center"><h2>Tabla del ${i}</h2>`;
        for(var a = 1; a<10;a++){
            tabla += `<p>${i} x ${a} = ${i*a}</p>`;
        }
        tabla+= `</div>`;
    }
    document.querySelector('#resultado').classList.add('flex');
    document.querySelector('#resultado').innerHTML = tabla;
}
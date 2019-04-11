var nombre;
var horaInicio;
var horaFin;

function conversor(){
    var euros = document.querySelector('#conversor').value;
    var moneda = document.querySelectorAll('input[name="conversion"]');
    console.log(moneda);
    var monedaSelected;
    var yenes = 126.53;
    var libras = 0.86;
    var dolares = 1.13;
    var coronas = 25.64;
    var conversion;

    for(var i = 0; i < moneda.length; i++){
        if(moneda[i].checked){
            monedaSelected = moneda[i].previousElementSibling.textContent;
        }
    }

    if(document.querySelector("#yenes").checked){
        conversion = euros * yenes;
    }else if(document.querySelector("#libras").checked){
        conversion = euros * libras;
    }else if(document.querySelector("#dolares").checked){
        conversion = euros * dolares;
    }else if(document.querySelector("#coronas").checked){
        conversion = euros * coronas;
    }

    resultado.innerHTML = ("La conversion de Euros a " +monedaSelected+" seria: "+conversion.toFixed(2));
};

function show(item){
    document.querySelector(`#${item}`).classList.remove("hide");
    document.querySelector(`#${item}`).classList.add("show");
};

function remove(item){
    document.querySelector(`#${item}`).classList.remove("show");
    document.querySelector(`#${item}`).classList.add("hide");
};

function clear(item){
    document.querySelector(`#${item} input[type="text"]`).value = ("");
    if(item != "inicio")
        document.querySelector(`#${item} div`).innerHTML = ("");
};

function addName(item){
    nombre = document.querySelector('#nombre').value.toUpperCase();
    document.querySelector(`#${item} #name`).innerHTML = nombre.toUpperCase();
};

function correcto(item){
    document.querySelector(`#${item} #respuesta`).innerHTML = ("Felicitaciones "+nombre+" tu respuesta es correcta!");
    if(item == "thirdQuestion"){
        horaFin = Date.now();
        var tiempo = (horaFin-horaInicio)/1000;
        document.querySelector(`#${item} #respuesta`).innerHTML = ("Enhorabuena "+nombre+" Todas las preguntas son correctas!<br>"+nombre+" has tardado "+tiempo+" s");

    };
};

function mostrar(pregunta){

    if(pregunta == 0){
        clear("inicio");
        remove("thirdQuestion");
        clear("thirdQuestion");
        show("inicio");
    }

    if(pregunta == 1){
        horaInicio = Date.now();
        addName("firstQuestion");
        remove("inicio");
        show("firstQuestion");
    }

    if(pregunta == 2){
        addName("secondQuestion");
        remove("siguiente");
        remove("firstQuestion");
        clear("firstQuestion");
        show("secondQuestion");
    }

    if(pregunta == 3){
        addName("thirdQuestion");
        remove("secondQuestion");
        clear("secondQuestion");
        show("thirdQuestion");
    }

};

function preguntas(flag){
    var respuesta;
    var dayOfWeek = ["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];
    var fecha = new Date();
    var dia = fecha.getDay();
    if(flag == 1){
        respuesta = document.querySelector('#first').value.toUpperCase();
        if(respuesta == "MADRID"){
            correcto("firstQuestion");
            show("siguiente");
        }else {
            document.querySelector('#respuesta').innerHTML =('¡Tienes que estudiar más! '+nombre+'!');
        }
    }
    if(flag == 2){
        respuesta = document.querySelector('#second').value;
        if(respuesta == "144"){
            correcto("secondQuestion");
            show("secondQuestion #siguiente");
        }else {
            document.querySelector('#secondQuestion #respuesta').innerHTML =('Fallaste vuelve a intentarlo');
        }
    }
    if(flag == 3){
        respuesta = document.querySelector('#third').value.toUpperCase();
        if(dayOfWeek[dia] == respuesta){
            correcto("thirdQuestion");
            show("thirdQuestion #siguiente");
        }else {
            document.querySelector('#thirdQuestion #respuesta').innerHTML =('Solo dos son correctas');
        }
    }
};




function mesAno(){
    var mes = parseInt(prompt("Ingrese el mes:"));
    var year = parseInt(prompt("Ingrese el año:"));
    var nombreMes;
    var resultado = document.querySelector('#resultado');
    var dias = [31,0,31,30,31,30,31,31,30,31,30,31];

    switch(mes){
        case 1: 
            nombreMes = "Enero"
            break;
        case 2: 
            nombreMes = "Febrero"
            if((year%4==0 || year%400 == 0) && year%100 != 0){
                dias[1]=29;
            }else{
                dias[1]=28;
            }
            break;  
        case 3: 
            nombreMes = "Marzo"
            break;
        case 4: 
            nombreMes = "Abril"
            break;
        case 5: 
            nombreMes = "Mayo"
            break;       
        case 6: 
            nombreMes = "Junio"
            break; 
        case 7: 
            nombreMes = "Julio"
            break; 
        case 8: 
            nombreMes = "Agosto"
            break;
        case 9: 
            nombreMes = "Septiembre"
            break;
        case 10: 
            nombreMes = "Octubre"
            break;
        case 11: 
            nombreMes = "Noviembre"
            break;
        case 12: 
            nombreMes = "Diciembre"
            break;
        default:
            nombreMes = "Mes ingresado no valido"
            break;
    };
    resultado.innerHTML = (`El mes ingresado es <strong>${nombreMes}</strong> y cuenta con <strong>${dias[mes-1]}</strong>`);

};

function fibonacci(){
    var numAnterior = 0;
    var numActual = 1;
    var numTransicion = 0;
    var result = `La sucesión de fibonacci es: ${numAnterior}, ${numActual}`;
    for(var i = 1; i <= 50; i++){
        numTransicion = numActual;
        numActual += numAnterior;
        numAnterior = numTransicion;
        result+=`, ${numActual}`;
    }
    resultado.innerHTML = result;
}
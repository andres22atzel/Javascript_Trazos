var flag = false;
var overlay = document.querySelector('#over');
var modal = document.querySelector('#message');
var pesetas = document.querySelector('#pesetas');
var usd = document.querySelector('#usd');
var yenes = document.querySelector('#yenes');
var yenesMoneda = 126.53;
var pesetasMoneda = 166.38;
var usdMoneda = 1.13;

function aparecer(){
    if(flag == false){
        overlay.classList.replace('overlayHide','overlayShow');
        // overlay.classList.add('overlayShow');
        // overlay.classList.remove('overlayHide');
        modal.classList.replace('hide','show');
        // modal.classList.add('show');
        // modal.classList.remove('hide');
        flag = true;
    }
    else{
        overlay.classList.replace('overlayShow','overlayHide');
        // overlay.classList.remove('overlayShow');
        modal.classList.replace('show','hide');
        // modal.classList.remove('show');
        // // overlay.classList.add('overlayHide');
        // modal.classList.add('hide');
        flag = false;
    }

};

function conversorNew(){
    var euro = document.querySelector('#euro').value;

    pesetas.innerHTML = (euro*pesetasMoneda).toFixed(2);
    usd.innerHTML = (euro*usdMoneda).toFixed(2);
    yenes.innerHTML = (euro*yenesMoneda).toFixed(2);

}

var btnAccess = document.querySelector('#btnAccess');

//Se utiliza propiedad de evento
// btnAccess.onclick = function(){aparecer();}

//Se crea evento al objeto
btnAccess.addEventListener("click",aparecer);
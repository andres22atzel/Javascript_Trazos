
var everything = document.querySelector('#all');
var earth = document.querySelector('#earth');
var water = document.querySelector('#water');
var fire = document.querySelector('#fire');
var flag = false;
var fireImages = document.querySelectorAll('.fuego');
var earthImages = document.querySelectorAll('.tierra');
var waterImages = document.querySelectorAll('.agua');

// everything.addEventListener("click",function(){

// });
console.log(fireImages);
earth.addEventListener("click",function(){
    var mayor = Math.max(fireImages.length,earthImages.length,waterImages.length);
    for(var i = 0; i < mayor; i++){
        if(i < fireImages.length){
            fireImages[i].classList.add('hide');
        }
        if(i < earthImages.length){
            earthImages[i].classList.remove('hide');
        }
        if(i < waterImages.length){
            waterImages[i].classList.add('hide');
        }
    }
});

fire.addEventListener("click",function(){
    var mayor = Math.max(fireImages.length,earthImages.length,waterImages.length);
    for(var i = 0; i < mayor; i++){
        if(i < fireImages.length){
            fireImages[i].classList.remove('hide');
        }
        if(i < earthImages.length){
            earthImages[i].classList.add('hide');
        }
        if(i < waterImages.length){
            waterImages[i].classList.add('hide');
        }
    }
});

water.addEventListener("click",function(){
    var mayor = Math.max(fireImages.length,earthImages.length,waterImages.length);
    for(var i = 0; i < mayor; i++){
        if(i < fireImages.length){
            fireImages[i].classList.add('hide');
        }
        if(i < earthImages.length){
            earthImages[i].classList.add('hide');
        }
        if(i < waterImages.length){
            waterImages[i].classList.remove('hide');
        }
    }
});

everything.addEventListener("click",function(){
    var mayor = Math.max(fireImages.length,earthImages.length,waterImages.length);
    for(var i = 0; i < mayor; i++){
        if(i < fireImages.length){
            fireImages[i].classList.remove('hide');
        }
        if(i < earthImages.length){
            earthImages[i].classList.remove('hide');
        }
        if(i < waterImages.length){
            waterImages[i].classList.remove('hide');
        }
    }
});


var verLinks = document.querySelectorAll(".ver");


for(var i = 0 ; i < verLinks.length ; i++){
    verLinks[i].addEventListener("click",function(){
        var source = this.parentElement.nextElementSibling.src;
        aparecer();
        modalImage.innerHTML = `<img src="${source}">`
    });
};




var modal = document.querySelector('.modal');
var flag = false;
function aparecer(){
    if(flag == false){
        modal.classList.remove('hideModalAnimation');
        modal.classList.replace('hideModal','showModal');
        flag = true;
    }
    else{
        modal.classList.add('hideModalAnimation');
        setTimeout(function(){
            modal.classList.replace('showModal','hideModal');
            flag = false;
        },1000);
    }

};

modal.addEventListener('click',function(){
    aparecer();
});
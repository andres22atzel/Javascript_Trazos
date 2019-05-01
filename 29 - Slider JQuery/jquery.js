$(document).ready(function(){
    let rightArrow = $('.fa-chevron-right');
    let leftArrow = $('.fa-chevron-left');
    let images = $('img');
    let numImage = 0;
    let maxElement = images.length-1;
    let time = 0;

    rightArrow.click(function(){
        time = 0;
        forward();
    });

    leftArrow.click(function(){
        if(numImage === 0){
            numImage = maxElement;
        }else{
            numImage--;
        }
        images.hide();
        $(images[numImage]).fadeIn();
    });

    function forward(){
        time = 0;
        if(numImage === maxElement){
            numImage = 0;
        }else{
            numImage++;
        }
        images.hide();
        $(images[numImage]).fadeIn();
    };

    setInterval(function(){
        time++;
        if(time > 5){
            forward();
        }
    },800);
});
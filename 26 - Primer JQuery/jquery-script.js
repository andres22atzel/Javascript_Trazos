$(document).ready(function(){
    let boton = $("#btnSaludo");
    let flag = false;

    boton.click(function(){
        if(flag === false){
            $(this).css({"color":"white","background-color":"gray"});
            flag = true;
        }else{
            $(this).css({"color":"white","background-color":"lightblue"});
            flag = false;
            $(this).hide(3000);
        }
    });
});



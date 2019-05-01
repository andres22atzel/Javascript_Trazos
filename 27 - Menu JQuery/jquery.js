
$(document).ready(function(){
    let btnAbrir = $("#open");
    let btnClose = $("#close");
    let menu = $("#menu");  
    btnAbrir.click(function(){
        menu.slideDown();
        $(this).hide();
    });
    btnClose.click(function(){
        menu.hide();
        btnAbrir.show();   
    });
});
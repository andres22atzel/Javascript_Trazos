
$(document).ready(function(){
    $(window).on({
        scroll:function(){
            var scrollEnPantalla = $('html').scrollTop();
            console.log(scrollEnPantalla);
        }
    });
    $('#btnScroll').on({
        click:function(){
            $('html').animate({
                "scrollTop":"800"
            },2000);
        }
    });
    $('#btnScroll').on({
        click:function(){
            $('html').animate({
                "scrollTop":"800"
            },2000);
        }
    });
});
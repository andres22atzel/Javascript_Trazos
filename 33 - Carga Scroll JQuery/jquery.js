
$(document).ready(function(){
    let scrollTopMax = ($('body').height())-($(window).height());
    let loadBarWidth = $("#loadBarContainer").width();
    let percentagePerScroll = loadBarWidth/scrollTopMax;
    $(window).on({
        scroll:function(){
            var scrollEnPantalla = $('html').scrollTop();
            let loadBar = scrollEnPantalla*percentagePerScroll;
            if(scrollEnPantalla<=0){
                $('#loadBarContainer').css({
                    "display":"none"
                });
            }else{
                $('#loadBarContainer').css({
                    "display":"block"
                });
            }
            $('#loadBar').css({
                "display":"block",
                "width":`${loadBar}px`
            });
        }
    });
});
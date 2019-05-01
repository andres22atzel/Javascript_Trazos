
$(document).ready(function(){
        let container = $('#imageContainer');
        let imagen = $(".image");

    function rePositionCenter(){
        let diffWidth = parseInt((imagen.width() - container.width())/2);
        let diffHeight = parseInt((imagen.height() - container.height())/2);
        imagen.css({
            "top":`-${diffHeight}px`,
            "left":`-${diffWidth}px`
        });
    };
    function rePositionMove(positionTop,positionLeft){
        let topMove;
        let leftMove;
        let halfContainerX = container.width()/2;
        let halfContainerY = container.height()/2;
        let diffWidth = (imagen.width() - container.width())/2;
        let diffHeight = (imagen.height() - container.height())/2;
        let pixelPerTop = diffHeight/halfContainerY;
        let pixelPerLeft = diffWidth/halfContainerX;
        if(positionTop<=halfContainerY && positionLeft<=halfContainerX){
            topMove = pixelPerTop*positionTop;
            leftMove = pixelPerLeft*positionLeft;
            imagen.css({
                "top":`-${diffHeight+topMove}px`,
                "left":`-${diffWidth+leftMove}px`
            });
        }else if(positionTop>halfContainerY && positionLeft<=halfContainerX){
            topMove = pixelPerTop*(halfContainerY-positionTop);
            leftMove = pixelPerLeft*positionLeft;
            imagen.css({
                "top":`-${diffHeight-topMove}px`,
                "left":`-${diffWidth+leftMove}px`
            });
        }
    };
    rePositionCenter();

    $("#imageContainer").mousemove(function(e){
        let halfContainerX = container.width()/2;
        let halfContainerY = container.height()/2;
        let positionContainerTop = $(this).position().top;
        let positionTop = (((e.pageY-positionContainerTop)-halfContainerY));
        let positionLeft = (e.pageX-halfContainerX);
        rePositionMove(positionTop,positionLeft);
    });
});
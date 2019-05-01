$(document).ready(function() {
  let imagenesGrid = $(".imageContainer");
  let imagenesScroll = $(".imageScroll");
  let imagenesScrollContainer = $("#imageScrollContainer");
  let posiciones = [];

  imagenesScroll.each(function(i,v){
        posiciones.push($(v).position().left);
  });

  imagenesGrid.click(function() {
    let src = $(this).children().attr("src");
    let posicionImageScroll;
    //console.log(src);
    posicionImageScroll = imagePosition(src);
    imagenesScrollContainer.animate({
        "scrollLeft":`${posicionImageScroll}`
    },800);
  });

  function imagePosition(src){
    let posicion;
    imagenesScroll.each(function(i,v){
        let srcScroll = $(v).children().attr("src");
        if(srcScroll === src){
            posicion = posiciones[i];
        }
    });
    return posicion;
  };
});


    $( "#modal" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

$("#btnModal").click(function(){
    $("#modal").dialog("open");
})

$(".columna").draggable({
    cursor:"move",
    grid:[110,110],
    revert: true,
    start:function(){
        $("#textlog").text("Start");
    },
    stop:function(){
        $("#textlog").text("Stop");
    }
});
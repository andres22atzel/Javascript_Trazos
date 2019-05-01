
$(document).ready(function(){
    let earth = $("#earth");
    let fire = $("#fire");
    let water = $("#water");
    let everything = $("#all");
    let fireImages = $(".fuego");
    let earthImages = $(".tierra");
    let waterImages = $(".agua");
    let verLinks = $(".ver");
    let modal = $("#modal");

    earth.click(function(){
        fireImages.hide();
        earthImages.show();
        waterImages.hide();
    });
    fire.click(function(){
        fireImages.show();
        earthImages.hide();
        waterImages.hide();
    });
    water.click(function(){
        fireImages.hide();
        earthImages.hide();
        waterImages.show();
    });
    everything.click(function(){
        fireImages.show();
        earthImages.show();
        waterImages.show();
    });

    verLinks.click(function(){
        let source = $(this).parent().next().attr("src");
        let modalImage = $("#modalImage");
        modalImage.html(`<img class="image" src="${source}">`);
        modal.fadeIn();
    });

    modal.click(function(){
        $(this).fadeOut();
    });
});
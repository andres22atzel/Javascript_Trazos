

document.querySelector('#texto').addEventListener("input",function(){
    const slug = document.querySelector('#slug');
    const character = document.querySelector('#character');
    const word = document.querySelector('#word');
    let slugText;
    let palabras = [];
    slugText = this.value.toLowerCase().trim().replace(/[ .*,-]+/g,"-");
    palabras = slugText.split("-");
    slug.value = slugText;
    character.textContent = this.value.length;
    word.textContent = palabras.length;
});

document.querySelector('#publish').addEventListener("input",function(){
    const publish = document.querySelector('#publish');
    const character = document.querySelector('#characterPublish');
    const word = document.querySelector('#wordPublish');
    const upper = document.querySelector('.uppercase');
    const lower = document.querySelector('.lowercase');
    let palabras = [];
    let words = 0;
    palabras = this.value.split(/ /g);
    character.textContent = this.value.length;
    words = words(palabras);
    word.textContent = words;
    upper.addEventListener("click",function(){
        publish.value = publish.value.toUpperCase();
    });
    lower.addEventListener("click",function(){
        publish.value = publish.value.toLowerCase();
    });
});


function words(palabras){
    let words = 0;
    for(let i = 0; i<palabras.length;i++){
        if(palabras[i]!="")
            words++;
    }
    return words;
}
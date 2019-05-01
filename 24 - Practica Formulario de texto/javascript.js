let flag = 0;

document.querySelector("#texto").addEventListener("input", function() {
  const slug = document.querySelector("#slug");
  const character = document.querySelector("#character");
  const word = document.querySelector("#word");
  let slugText;
  let palabras = [];
  let words = 0;
  slugText = this.value
    .toLowerCase()
    .trim()
    .replace(/[ .*,-]+/g, "-");
  palabras = slugText.split("-");
  slug.value = slugText;
  character.textContent = this.value.length;
  words = wordsFunction(palabras);
  word.textContent = words;
});

document.querySelector("#publish").addEventListener("input", function() {
  const publish = document.querySelector("#publish");
  const character = document.querySelector("#characterPublish");
  const word = document.querySelector("#wordPublish");
  const upper = document.querySelector(".uppercase");
  const lower = document.querySelector(".lowercase");
  let palabras = [];
  let words = 0;
  palabras = this.value.split(/ /g);
  character.textContent = this.value.length;
  words = wordsFunction(palabras);
  word.textContent = words;
  console.log(flag);
  if(flag === 1){
    publish.value = publish.value.toUpperCase();
  }else if(flag===2){
    publish.value = publish.value.toLowerCase();
  }
  upper.addEventListener("click", function() {
    publish.value = publish.value.toUpperCase();
    console.log(flag);
    flag = 1;
  });
  lower.addEventListener("click", function() {
    publish.value = publish.value.toLowerCase();
    flag = 2;
  });
});

function wordsFunction(palabras) {
  let words = 0;
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] != "") words++;
  }
  return words;
}

//ver metodos replace, match, find, search
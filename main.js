// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);


function fishBtnClicked() {
  let character = charSelect.value;
  if (character === 'steve') {
    catchFish(0.7, 0.9, 0.05)
  }
  if (character === 'alex') {
    catchFish(0.1, 0.1, 0.3)
  }
  if (character === 'villager') {
    catchFish(0.25, 0.25, 0.25)
  }


}
 function catchFish(oddsofcod, oddsofsalmon, oddsoftropical) {
    let randNum = Math.random();
    if (randNum < oddsofcod) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = 'img/Raw-Cod.png';
    } else if (randNum < oddsofsalmon) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = 'img/Raw-Salmon.png';
    } else if (randNum < oddsoftropical) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = 'img/Tropical-Fish.png';
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = 'img/Pufferfish.png';
    }
  } 
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById("final-message-reveal");

const figureParts = document.querySelectorAll(".figure-part");
const words = ["applicable","programming","interface","wizard"];

let selectedWord = words[Math.floor(Math.random()*words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

// show hidden 

function displayWord(){
    wordEl.innerHTML=`
   ${selectedWord.split('').map(letter=> {
     return `<span class="letter">
     ${correctLetters.includes(letter)?letter:''}
     </span>`
   }).join('')}
  `;
    const innerWord = wordEl.innerText.replace(/[\n]/g,'');
    if(innerWord === selectedWord){
        finalMessage.innerHTML = "Congragulations";
        popup.style.display = "flex";
        playable = false;
    }
}

window.addEventListener('keydown',e=>{
    if(playable){
        if(e.keyCode>=65 && e.keyCode<=90){
            const letter = e.key.toLowerCase();
            if(selectedWord.includes(letter)){
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter);
                    displayWord();
                }
            }
        }
    }
});
displayWord()
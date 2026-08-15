const randomNum = (parseInt(Math.random()*10 ));
console.log(randomNum);

const submit = document.querySelector('.guessSubmit')
const input = document.querySelector('.guessFei')
const guessSlot = document.querySelector('.Guesses');
const remain = document.querySelector('.lastResult');
const low = document.querySelector('.low');
const start = document.querySelector('.resultParas');

const para = document.createAttribute('p');

let preGuess = [];
let numGuess = 1 ;

let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validate(guess);
        
    }); 
}

 function validate(guess){
  if (isNaN(guess)) {
    alert('Please enter a valid number'); 
    }
   else{
     preGuess.push(guess);
     
     if (numGuess === 11) {
    
        displayMsg(`Game over.Random number was ${randomNum}`);
        endGame();
     }else{
        showGuess(guess);
        checkGuess(guess);
     }
  }
}

function checkGuess(guess){
   
    if (guess === randomNum) {
        displayMsg(`You are win!!!!....`);
        endGame();
    }else if (guess < randomNum) {
        displayMsg('Number is too low....');
    }else if (guess > randomNum) {
         displayMsg('number is too high');
    }
}
function showGuess(guess){
   input.value='';
   guessSlot.innerHTML += `${guess},`;
   numGuess++;
   remain.innerHTML=`${11-numGuess}`;
   endGame();
}

function displayMsg(message){
 low.innerHTML= `<h2>${message}</h2>`;
}
function endGame(){
      input.value='';
    //    input.setAttribute('disabled','');
      
    
       playGame=false;
    //    newGame();
}

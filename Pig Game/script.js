'use strict';

//selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1'); //this access is faster
const dice = document.querySelector('.dice');
const btn_roll = document.querySelector('.btn--roll');
const btn_new = document.querySelector('.btn--new');
const btn_hold = document.querySelector('.btn--hold');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');

const switchPlayer = function()
{
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0 ;
    player0.classList.toggle('player--active'); //to switch the player light
    player1.classList.toggle('player--active');
}

let playing = true;



//put zeros in total score of two player at the beginning of game
score0.textContent = '0';  
score1.textContent = '0';

//hide the dice at the beginning
dice.classList.add('hidden');

//rolling dice functionality 
const scores = [0,0];
let currentScore = 0 ;
let activePlayer = 0 ;

btn_roll.addEventListener('click', function()
{
    if(playing)
    {
        //generate a random number for dice
    let randomNumber = Math.trunc( Math.random()*6)+1;

    //display the dice // the game started  
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;

    //check if the dice = 1, switch next player & current score = 0
    if(randomNumber !== 1)
    {
        //add dice number to the current score to current player
        currentScore += randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //change the player and make current score = 0 
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        switchPlayer();
    }
    }

})


btn_hold.addEventListener('click', function(){
    
    if(playing)
    {
        // 1. Adding current score to active player total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

   // 2. check if total score of player >= 100 [WINNER]
    if(scores[activePlayer]>= 20)
    {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
        

    } else{
        //switch player
        switchPlayer();
    }
    }
})


btn_new.addEventListener('click', function(){
    
})
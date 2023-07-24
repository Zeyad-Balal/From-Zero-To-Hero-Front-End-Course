"use strict";

//generate random number to be secret
let random_number = Math.trunc( Math.random() * 20 ) + 1;

let score = 20 ; // number of trials

//change page font style    
document.querySelector('body').style.fontFamily = 'Cursive';

let highScore = 0; //keep tracking high score variable


//After click on ***check button*** [Handling clicks] -> addEventListener(name of event , function when click)
document.querySelector('.check').addEventListener('click' , function()
{
    //store the guessing number of the player
    let guess = Number(document.querySelector('.guess').value);
    
    //when there is no number as input
    if(!guess)
    {
        document.querySelector('.message').textContent = '⛔ No Number!'; 

    }

    //when player has right guessing
    else if(guess === random_number)
    {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = random_number; //display the secret number

        //change background color
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        //expand the box
        document.querySelector('.number').style.width = '30rem';
       
        //high score handling
        highScore = Number(document.querySelector('.highScore').textContent);
        if(score > highScore)
        {
            document.querySelector('.highScore').textContent = score ; //high score value changes
        }
    }

    //when number is wrong // refactored //
    else if (guess != random_number)
    {
        if(score > 1 )
        {
            document.querySelector('.message').textContent = guess > random_number ? ' ⬆️ Your Guess is High' :  ' ⬆️ Your Guess is Low';
            score--;
            score_text = document.querySelector('.score').textContent = score;

        }

        else{
            //user finish his trials' limits
            document.querySelector('.message').textContent = ' 😭 You Lost The Game';
            document.querySelector('.number').textContent = random_number;
            score_text = document.querySelector('.score').textContent = 0;
        }
    }
});

//Again Button Handling [RESET PAGE]
document.querySelector('.again').addEventListener('click' , function()
{
    score = 20; // reset number of trials
    random_number = Math.trunc( Math.random() * 20 ) + 1; //generate new random number
    document.querySelector('.message').textContent = ' 🤔 Start guessing...'; 
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; //clear guess value

    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem'; // resize the secret's box
    
});








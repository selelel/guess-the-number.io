'use strict';


//Guess the Number - Prototype (DOM)
// To Challenge myself and avoid looking at tutorial (bro, just got a Heads in a toss coin, lol xD)

//What is the Guess the number Do?

/// You going to guess a number betwen a 2 random number (1 - 20).
// - your going to manipulate words, as well as the css of the web application(Guess the Number).

//So how are you bale to do that and solve this application in general?
/// i am going to use the methodology on solving a problem with 4 step (i am actually doing the first step which is making sure i 100% understand the problem/web application in general.)

// DIVIDE AND CONQUER
// Create a MathRandom beetween 1-20 /
// Create a limit 'Score: 20'
// Highscore dont know how to implment but may be later <---
/// Get VALUE inserted in the Number input /

// const guessedNum = document.getQuery('rootInput').value;

// if (the number inserted by the user === equal to the randomize number we created) {
  // document.getelement('rootStatus').textContent = 'Congratulation The Number PAssed🎉🎉🎉'.
// if else(the number inserted by the user < equal to the randomize number we created) {
  // document.getelement('rootStatus').textContent = 'to low (●'◡'●)'.}
// if else (the number inserted by the user > equal to the randomize number we created) {
  //   document.getelement('rootStatus').textContent = 'to high (╯°□°）╯︵ ┻━┻'.}
  // '0' === no Number
// }


let try_iterate = 20;
let randomNumber = Math.floor(Math.random()  * 20) + 1;
let interaction;
let limit = 0;
let highscore = [];

const clickHandler_again = () => {
  limit = 0
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number ').textContent = '?';
  document.body.style.backgroundColor = "#222";
  randomNumber = Math.floor(Math.random()  * 20) + 1;
  try_iterate = 20
}

const clickHandler = () => {
  limit += 1;
  if(limit <=20){
    decision(document.querySelector('.guess').value);
    document.querySelector('.score').textContent = try_iterate;
  } else{
    document.querySelector('.message').textContent = "You Loss .·´¯`(>▂<)´¯`·. ";
    document.body.style.backgroundColor = "#fc544e";
  }
}

document.querySelector('.again').addEventListener('click', clickHandler_again)
document.querySelector('.check').addEventListener('click', clickHandler);


const decision = (input) => {
  if (input == randomNumber){
    document.querySelector('.message').textContent = "You've guessed the Number (^///^)";
    document.querySelector('.number ').textContent = input;
    highscore.push (try_iterate);
    document.querySelector('.highscore').textContent = Math.max(...highscore);
    console.log(highscore)
    document.querySelector('.guess').value = ' ';
    document.body.style.backgroundColor = "#02db35";

  }else if(input < 1 || input > 20){
    document.querySelector('.message').textContent = "Number don't Exist（‵□′）";
    document.querySelector('.number ').textContent = '?';
    try_iterate -= 1;
    document.querySelector('.guess').value = ' ';
  }else if(input < randomNumber){
    document.querySelector('.message').textContent = "To Low ಥ_ಥ";
    document.querySelector('.number ').textContent = '?';
    try_iterate -= 1;
    document.querySelector('.guess').value = ' ';
  } else if(input > randomNumber){
    document.querySelector('.message').textContent = "To High ಠ_ಠ";
    document.querySelector('.number ').textContent = '?';
    try_iterate -= 1;
    document.querySelector('.guess').value = ' ';
  } 
}


const high = (val) => {
  highscore.push(val)
}


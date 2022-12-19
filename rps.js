//Make rock paper scissors against computer

//only allow "Rock" or "Paper" or "Scissors" as the prompt using allowedPlayerInput
//play a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" using playRoundFunction
//game function will use playRound function as a callback to play 5 total round of the game and keep the score. At the end, will display the winner. Choose a for loop for this one.
//Create helper functions as needed

// Variables for the game

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let invalidChoice;


// Return random rock/paper/scissor computer choice
function getComputerChoice () {
    let random3 = Math.floor(Math.random() * 3) + 1;
    switch (random3) {
        case 1:
            return rock;
        case 2:
            return paper;
        case 3:
            return scissors;
    }
}

//testing Computer choice
console.log("What computer picked (" + getComputerChoice()+ ")");

//prompt a choice from the player and capitalize first letter, lower case the rest using casePlayerInput function
function casePlayerInput () {
    let playerInput = prompt("Input Rock or Paper or Scissors");
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerInput;
}

//testing player choice
console.log("What you picked (" + casePlayerInput()+ ")");
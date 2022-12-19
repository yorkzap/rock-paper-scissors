//Make rock paper scissors against computer

//game function will use playRound function as a callback to play 5 total round of the game and keep the score. At the end, will display the winner. Choose a for loop for this one.
//Create helper functions as needed

// Variables for the game

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let invalidChoice = "Wrong input"


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

//Testing Computer choice
console.log("What computer picked (" + getComputerChoice()+ ")");

//Prompt a choice from the player and capitalize first letter, lower case the rest using casePlayerInput function
function casePlayerInput () {
    let playerInput = prompt("Input Rock or Paper or Scissors");
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerInput;
}


// Allow only rock/paper/scissors input
function allowedPlayerInput(playerInput) {
    switch (true) {
        case (playerInput == rock || playerInput == rock + "s"):
            console.log("What you picked (" + rock+ ")");
            return rock;

        case (playerInput == paper || playerInput == paper + "s"):
            console.log("What you picked (" + paper+ ")");
            return paper;

        case (playerInput == scissors || playerInput == scissors.slice(0,-1)):
            console.log("What you picked (" + scissors+ ")");
            return scissors;
        default:
            console.log(invalidChoice + "Try again");
            return invalidChoice;
    }
}

allowedPlayerInput(casePlayerInput());


//play a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" using playRoundFunction

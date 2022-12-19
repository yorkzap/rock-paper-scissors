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
            console.log("What computer picked (" + rock+ ")");
            return rock;
        case 2:
            console.log("What computer picked (" + paper+ ")");
            return paper;
        case 3:
            console.log("What computer picked (" + scissors+ ")");
            return scissors;
    }
}


//Capitalize first letter, lower case the rest prompt input
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

playerSelection = allowedPlayerInput(casePlayerInput());
computerSelection = getComputerChoice();
//console.log(playerSelection);
//console.log(computerSelection);

// Single round of game 
// that declares the winner of the round like so: "You Lose! Paper beats Rock" using 

function playRound(playerSelect, computerSelection) {
    switch (true) {
      case (playerSelect == computerSelection):
        console.log("It's a tie, you and the computer both picked");
        return "It's a tie, you and the computer both picked " + computerSelection;
      case (playerSelect === rock && computerSelection === scissors):
        console.log("You win"2);
        return "You win"
      case (playerSelect === paper && computerSelection === rock):
        console.log("You win");
        return "You win"
      case (playerSelect === scissors && computerSelection === paper):
        console.log("You win");
        return "You win"
      case (playerSelect === rock && computerSelection === paper):
        console.log("You lose");
        return "You lose";
      case (playerSelect === paper && computerSelection === scissors):
        console.log("You lose");
        return "You lose";
      case (playerSelect === scissors && computerSelection === rock):
        console.log("You lose");
        return "You lose";
    }
  }
  

playRound(playerSelection, computerSelection)
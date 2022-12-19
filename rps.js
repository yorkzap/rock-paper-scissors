//Make rock paper scissors against computer

//game function will use playRound function as a callback to play 5 total round of the game and keep the score. At the end, will display the winner. Choose a for loop for this one.
//Create helper functions as needed

// Variables for the game

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let invalidChoice = "Wrong input";
let win = "You win";
let lose = "You lose";
let tie = "It's a tie";


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
            return rock;

        case (playerInput == paper || playerInput == paper + "s"):
            return paper;

        case (playerInput == scissors || playerInput == scissors.slice(0,-1)):
            return scissors;
        default:
            return invalidChoice;
    }
}



// Single round of game 

function playRound(playerSelection, computerSelection) {
    switch (true) {
      case (playerSelection == computerSelection):
        console.log("You and the computer both picked " + computerSelection);
        return tie;
      case (playerSelection === rock && computerSelection === scissors):
        console.log(playerSelection + " beats " + computerSelection);
        return win;
      case (playerSelection === paper && computerSelection === rock):
        console.log(playerSelection + " beats " + computerSelection);
        return win;
      case (playerSelection === scissors && computerSelection === paper):
        console.log(playerSelection + " beats " + computerSelection);
        return win;
      case (playerSelection === rock && computerSelection === paper):
        console.log(computerSelection + " beats " + playerSelection);
        return lose;
      case (playerSelection === paper && computerSelection === scissors):
        console.log(computerSelection + " beats " + playerSelection);
        return lose;
      case (playerSelection === scissors && computerSelection === rock):
        console.log(computerSelection + " beats " + playerSelection);
        return lose;
    }
  }
  


//function called game(). Call the playRound function inside of this one to play
//a 5 round game that keeps score and reports a winner or loser at the end.

function game () {
    let winCount = 0;
    let loseCount = 0;
    let tieCount = 0;
    let winner;
    for (i = 0; i < 5; i++) {
        playerSelection = allowedPlayerInput(casePlayerInput());
        computerSelection = getComputerChoice();
        round = playRound(playerSelection, computerSelection);
        if (round == win) {
            winCount += 1;
            console.log(win + " the game " + ((parseInt(i) + 1)));
        }
        else if (round == lose) {
            loseCount += 1;
            console.log(lose + " the game " + ((parseInt(i) + 1)));
        }
        else {
            i -= 1;
            console.log(tie + "...let's try again");
        }
    }
    winCount > loseCount ? winner = "You won the 5 round game" : winner = "Computer won the 5 round game";
    console.log(winner);
    return winner;
}

game();
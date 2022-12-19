//Five round Rock, Paper and Scissors against computer
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

//Prompt input with upper case first letter and lower case body
function casePlayerInput () {
    let playerInput = prompt("Input Rock or Paper or Scissors");
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerInput;
}

// Sort ambigious rock/paper/scissors inputs and invalid inputs
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
  
// Call playRound() 5 times keeping score
function game () {
    let winCount = 0;
    let loseCount = 0;
    for (i = 0; i < 11; i++) {
        if (winCount == 5) {
            console.log(win);
            i = 12;
            return win;
        }
        if (loseCount == 5) {
            console.log(lose);
            i = 12;
            return lose;
        }
        playerSelection = allowedPlayerInput(casePlayerInput());
        computerSelection = getComputerChoice();
        round = playRound(playerSelection, computerSelection);
        
        if (round == win && winCount < 5) {
            winCount += 1;
            console.log(win + " the game " + ((parseInt(i) + 1)));
        }
        else if (round == lose && loseCount <5) {
            loseCount += 1;
            console.log(lose + " the game " + ((parseInt(i) + 1)));
        }
        else if (round == tie) {
            i -= 1;
            console.log(tie + "...let's try again");
        }
    }
}
game();
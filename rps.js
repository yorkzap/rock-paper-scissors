//Make rock paper scissors against computer


//playRound function gets play a single round against computer by comparing computerchoice and playerChoice, and then shows the winner with the string like "You Lose! Paper beats Rock"
//game function gets use playRound function as a callback to play 5 total round of the game and keep the score. At the end, will display the winner. Choose a for loop for this one.
//Create helper functions as needed

// Return random rock/paper/scissor computer choice
function getComputerChoice () {
    let random3 = Math.floor(Math.random() * 3) + 1;
    switch (random3) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }
}

//testing getComputerChoice
console.log("computer:" + getComputerChoice());

// Return playerSelection with proper alphabet casing to match strings
function getPlayerChoice () {
    let playerSelection = prompt('Choose Rock, Paper or Scissors');
    // Capitalize first letter and lower case the following
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection == "Rock" || playerSelection == "Rocks") {
        return "Rock";
    }
    else if (playerSelection == "Paper" || playerSelection == "Papers") {
        return "Paper";
    }
    else if (playerSelection == "Scissor" || playerSelection == "Scissors") {
        return "Scissor";
    }
    else {
        return "Sorry, you have entered an invalid choice...";
    }
}

//testing getPlayerChoice
console.log("player: " + getPlayerChoice());
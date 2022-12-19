//Make rock paper scissors against computer


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

// Return playerInput with proper alphabet casing to match strings
function getPlayerChoice () {
    let playerInput = prompt('Choose Rock, Paper or Scissors');
    // Capitalize first letter and lower case the following
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    
    if (playerInput == "Rock" || playerInput == "Rocks") {
        return "Rock";
    }
    else if (playerInput == "Paper" || playerInput == "Papers") {
        return "Paper";
    }
    else if (playerInput == "Scissor" || playerInput == "Scissors") {
        return "Scissor";
    }
    else {
        return "Sorry, you have entered an invalid choice...";
    }
}

//testing getPlayerChoice
console.log("player: " + getPlayerChoice());

//playRound function gets play a single round against computer by comparing computerchoice and playerChoice, and then shows the winner with the string like "You Lose! Paper beats Rock"

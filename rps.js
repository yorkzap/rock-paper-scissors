//Make rock paper scissors against computer
//getComputerChoice function will return computer choice, either rock paper or scissors
//computerSelection will get the output of getComputerChoice function into itself
//playerSelection will get user input via prompt
//playRound function will play a single round against computer by comparing computerchoice and playerChoice, and then shows the winner with the string like "You Lose! Paper beats Rock"
//game function will use playRound function as a callback to play 5 total round of the game and keep the score. At the end, will display the winner. Choose a for loop for this one.
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

console.log(getComputerChoice());
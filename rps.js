//Make rock paper scissors against computer


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
        return "an invalid choice...";
    }
}

//testing getPlayerChoice

//playRound function gets play a single round against computer by comparing computerchoice and playerChoice
function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log("You picked " + playerSelection);
    console.log("The computer picked " + computerSelection);
    let win = "You win";
    let lose = "You lose";
    let tie = "It's a tie, go again!";
    switch (true) {
        case (playerSelection == "an invalid choice..."):
            return "Let's try again";
        case (playerSelection == computerSelection):
            return tie;
        case (playerSelection == "Rock" && computerSelection == "Paper"):
            return lose; ///paperBeatsRock
        case (playerSelection == "Paper" && computerSelection == "Scissor"):
            return lose; //scissorBeatsPaper
        case (playerSelection == "Scissor" && computerSelection == "Rock"):
            return lose; //rockBeatsScissor
        case (playerSelection == "Rock" && computerSelection == "Scissor"):
            return win; //rockBeatsScissor
        case (playerSelection == "Paper" && computerSelection == "Rock"):
            return win; //paperBeatsRock
        case (playerSelection == "Scissor" && computerSelection == "Paper"):
            return win; //scissorBeatsPaper
    }
}
//singleGame = playRound();

//game function gets use playRound function as a callback to play 5 total round of the game and keep the score. At the end, will display the winner. Choose a for loop for this one.
//record wincount, losecount and tiecount

function game (playRound) {
    let winCount = 0;
    let loseCount = 0;
    let tieCount = 0;
    for (i = 0; i < 5; i++) {
        let result = playRound();
        if (result == "You win") {
            winCount += 1;
            console.log(result + " the round " + (parseInt(i)+1));
            console.log("_________________");
        }
        else if (result == "You lose") {
            loseCount += 1;
            console.log(result + " the round " + (parseInt(i) +1));
            console.log("_________________");
        }
        else {
            tieCount += 1;
            console.log(result);
            console.log("_________________");
            i -= 1;
        }
    }
    return console.log('wincounts: ' + winCount + ' losecounts: ' + loseCount + ' tiecounts ' + tieCount);
    
}
game(playRound);


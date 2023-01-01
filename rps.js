//Five round Rock, Paper and Scissor game against the computer

// Variables for the game
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let win = 0;
let lose = 0;
let tie = 0;
let computerSelection;
let playerSelection;
const result = document.querySelector('#result');
const rematch = document.querySelector('.hiddenResultButton');
const ai = document.querySelector('#computer');
const human = document.querySelector('#human');

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

// play a round of game until win or lose count reaches 5
function playRound(playerSelection) {
    while (win < 5 && lose < 5) {
      computerSelection = getComputerChoice();
      const roundResult = document.querySelector('#container h2');
      if (playerSelection == computerSelection) {
        roundResult.textContent = "You and the computer both picked " + computerSelection;
          tie++;
          ai.textContent = "AI: " + lose;
          human.textContent = "Human race: " + win;
          break;
      }

      else if ((playerSelection === rock && computerSelection === scissors) ||
      (playerSelection === paper && computerSelection === rock) ||
      (playerSelection === scissors && computerSelection === paper)) {
        roundResult.textContent = playerSelection + " beats " + computerSelection;
        win++
        ai.textContent = "AI: " + lose;
        human.textContent = "Human race: " + win;
        checkResult()
        break;
      }
      else {
        roundResult.textContent = computerSelection + " beats " + playerSelection;
        lose++;
        ai.textContent = "AI: " + lose;
        human.textContent = "Human race: " + win;
        checkResult()
        break;
      }
    }
  }


// Display winner or loser of the 5 games
function checkResult() {
  if (win == 5) {
    result.textContent="You've won " + win + " rounds! Shabhash Singha. But can you..."
    rematch.classList.remove('hiddenResultButton');
    rematch.addEventListener('click', () => retry());
  }
  else if (lose == 5) {
    result.textContent="AI has won " + lose + " rounds! AI will take over...unless you";
    rematch.classList.remove('hiddenResultButton');
    rematch.addEventListener('click', () => retry());
  }
}


// Play 5 more rounds by resetting the initializer and hiding the button/result text
function retry() {
  win = 0;
  lose = 0;
  rematch.classList.add('hiddenResultButton');
  ai.textContent = "AI: " + lose;
  human.textContent = "Human race: " + win;
  result.textContent="";
}

// One button for each selection with event listener added to the buttons
const choices = document.querySelectorAll('.choices');
choices.forEach((choice, i) => {
    if (i == 0) {
        choice.addEventListener('click', () => playRound(rock, computerSelection));
    }
    else if (i == 1) {
        choice.addEventListener('click', () => playRound(paper, computerSelection));
    }
    else {
        choice.addEventListener('click', () => playRound(scissors, computerSelection));
    }
});
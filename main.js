const computerSelectionDiv = document.getElementById("computer-selection");
const playerSeletionDiv = document.getElementById("player-selection"); 
const winnerDiv = document.getElementById("round-winner");

const winnerHeader = document.createElement("h3");
const gameOverHeader = document.getElementById("gameover-header");

const winnerSpan = document.createElement("span");
const computerScoreSpan= document.getElementById("computer-score");
const playerScoreSpan = document.getElementById("player-score");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const newGameBtn = document.getElementById("new-game-btn");


const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


newGameBtn.addEventListener('click', () => {
  resetScore();
  game();
});

function game() {

  rockBtn.addEventListener('click', () => {
    let playerChoice = rockBtn.value;
    
    computerSelectionDiv.lastChild.textContent = "";
    gameRound(playerChoice);
  });

  paperBtn.addEventListener('click', () => {
    let playerChoice = paperBtn.value;

    computerSelectionDiv.lastChild.textContent = "";
    gameRound(playerChoice);
  });

  scissorsBtn.addEventListener('click', () => {
    let playerChoice = scissorsBtn.value;

    computerSelectionDiv.lastChild.textContent = "";
    gameRound(playerChoice);
  });

  scoreboard(playerScore, computerScore);
}

/**************** Game Round *******************/

function gameRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let roundWinner = getRoundWinner(playerChoice, computerChoice);
  let isFinalScore = finalScore(playerScore, computerScore);
  

  if (!isFinalScore) {
    if (roundWinner === "player") {
      playerScore += 1;
      winnerHeader.textContent = "You win this round!";
      winnerSpan.textContent = `${playerChoice} beats ${computerChoice}`;
      
    }
    else if (roundWinner === "computer") {
      computerScore += 1;
      winnerHeader.textContent = "You lost this round!";
      winnerSpan.textContent = `${computerChoice} beats ${playerChoice}`;
    }
    else {
      winnerHeader.textContent = "It was a tie";
      winnerSpan.textContent = "";
    }
    winnerDiv.append(winnerHeader);
    winnerDiv.append(winnerSpan);

    scoreboard(playerScore, computerScore);
  }
  else endGame(playerScore, computerScore);
}
  

/**************** End of Game ********************/

function endGame(playerScore, computerScore) {
  let message = "";

  if (playerScore === 5) {
    message = "You have won the game";
  }
  if (computerScore === 5) {
    message = "You have lost the game";
  }
  gameOverHeader.textContent = message;
}


/*************computer choice *********************/

function getComputerChoice() {
  let index = random(choices.length);
  let choice = choices[index];
  let span = document.createElement("span");
  span.textContent = choice;
  computerSelectionDiv.append(span);
  return choice;
}

function random(number) {
  return Math.floor(Math.random() * number);
}



/**************** Scoring *******************/


function resetScore() {
  playerScore = 0;
  computerScore = 0;
}


function finalScore(playerScore, computerScore) {
  if (playerScore == 5 || computerScore == 5) {
    return true;
  }
  else return false;  
}


function scoreboard(playerScore, computerScore) {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}


function getRoundWinner(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  let winner;

   if (
    playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper"
   ) {
     winner = "player";
  }
  else if (
    computerChoice === "rock" && playerChoice === "scissors" ||
    computerChoice === "paper" && playerChoice === "rock" ||
    computerChoice === "scissors" && playerChoice === "paper"
   ) {
    winner = "computer";
  }
  else {
    winner = "tie";
  }
  return winner;
}










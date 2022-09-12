const computerSelectionDiv = document.getElementById("computer-selection");
const playerSeletionDiv = document.getElementById("player-selection"); 
const winnerDiv = document.getElementById("round-winner");
const computerScoreSpan= document.getElementById("computer-score");
const playerScoreSpan = document.getElementById("player-score");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");


const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function game() {

  rockBtn.addEventListener('click', () => {
    let playerChoice = rockBtn.value;

    
    computerSelectionDiv.lastChild.textContent = "";
    gameRound(playerChoice, getComputerChoice());
    
  });

  paperBtn.addEventListener('click', () => {
    let playerChoice = paperBtn.value;

    computerSelectionDiv.lastChild.textContent = "";
    gameRound(playerChoice, getComputerChoice());
  });

  scissorsBtn.addEventListener('click', () => {
    let playerChoice = scissorsBtn.value;

    computerSelectionDiv.lastChild.textContent = "";
    gameRound(playerChoice, getComputerChoice());
  });

  scoreboard(playerScore, computerScore);
}

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

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function checkScore(playerScore, computerScore) {
  if (playerScore == 5) {
    resetScore();
    console.log("player won");
  }
  if (computerScore == 5) {
    resetScore();
    console.log("computer won");
  }
  
}

function scoreboard(playerScore, computerScore) {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function gameRound(playerChoice, computerChoice) {

  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  let winnerHeader = document.createElement("h3");
  let winnerSpan = document.createElement("span");
  
  if (
    playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper"
  ) {
    playerScore += 1;
    winnerHeader.textContent = "You win this round!";
    winnerSpan.textContent = `${playerChoice} beats ${computerChoice}`;
    winnerDiv.append(winnerHeader);
    winnerDiv.append(winnerSpan);
  }
  else if (
    computerChoice === "rock" && playerChoice === "scissors" ||
    computerChoice === "paper" && playerChoice === "rock" ||
    computerChoice === "scissors" && playerChoice === "paper"
  ) {
    computerScore += 1;
    winnerHeader.textContent = "You lost this round!";
    winnerSpan.textContent = `${computerChoice} beats ${playerChoice}`;
    winnerDiv.append(winnerHeader);
    winnerDiv.append(winnerSpan);
  }
  else {
    winnerHeader.textContent = "It was a tie";
    winnerDiv.append(winnerHeader);
  }
  
  scoreboard(playerScore, computerScore);
  checkScore(playerScore, computerScore);  
}


game();




const computerSelectionDiv = document.getElementById("computer-selection");
const playerSeletionDiv = document.getElementById("player-selection"); 
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");


const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

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



function gameRound(playerChoice, computerChoice) {

  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  console.log(`player choice: ${playerChoice} \n computer choice: ${computerChoice}`)
  
  if (
    playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper"
  ) {
    playerScore += 1;
    console.log(`You win the round! ${playerChoice} beats ${computerChoice} \n player score: ${playerScore}`);
  }
  else if (
    computerChoice === "rock" && playerChoice === "scissors" ||
    computerChoice === "paper" && playerChoice === "rock" ||
    computerChoice === "scissors" && playerChoice === "paper"
  ) {
    computerScore += 1;
    console.log(`You lose this round. ${computerChoice} beats ${playerChoice} \n computer score: ${computerScore}`);
  }
  else console.log("You tied with the computer");

  scoreboard(playerScore, computerScore);
  
  checkScore(playerScore, computerScore);
  
}







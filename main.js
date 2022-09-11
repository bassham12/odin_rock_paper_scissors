const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
  let index = random(choices.length);
  let choice = choices[index];
  return choice;
}

function random(number) {
  return Math.floor(Math.random() * number);
}

function gameRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  console.log(computerChoice);
  if (
    playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper"
  ) {
    console.log(`You win the round! ${playerChoice} beats ${computerChoice}`);
  }
  else if (
    computerChoice === "rock" && playerChoice === "scissors" ||
    computerChoice === "paper" && playerChoice === "rock" ||
    computerChoice === "scissors" && playerChoice === "paper"
  ) {
    console.log(`You lose this round. ${computerChoice} beats ${playerChoice}`);
  }
  else console.log("You tied with the computer");
}




const input = document.querySelector(".player-choice");
const inputBtn = document.querySelector(".input-btn");
const output = document.querySelector(".output");
const playerPointsOutput = document.querySelector(".player-points");
const computerPointsOutput = document.querySelector(".computer-points");

// make a array of "rock", "paper", "scissors"
const choices = ["rock", "paper", "scissors"];
let computersSelection = getComputerChoice(choices);
let playerSelection = getPlayerChoice();
let computerPoints = 0;
let playerPoints = 0;


function getPlayerChoice() {
  let selection;
  inputBtn.addEventListener('click', () => {
    selection = input.value;
    input.value = "";
    return selection;    
  });
}

// get a random choice between rock, paper, or scissors
function getComputerChoice(choices) {  
  let randomNum = Math.floor(Math.random() * (choices.length));
  let selection = choices[randomNum];
  console.log(selection);
  return selection
}

//game round takes in the choice of the player and the computer

function gameRound(playerSelection, computerSelection) {
  let message = "";
  // compare playerSelection and computerSelection
  if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"
  )
  {
    playerPoints++;
    message = `You Win! ${playerSelector} beats ${computerSelector}`; 
  } else {
    computerPoints++;
    message = `You Lose! ${computerSelector} beats ${playerSelector}`
  }
  // if the player loses print "You Lose! Paper beats Rock"
  // if the player wins print "You win! Paper beats Rock"
  output.innerHTML = message;
  playerPointsOutput.innerHTML = `player \n ${playerPoints}`;
  computerPointsOutput.innerHTML = `computer \n ${computerPoints}`;
}


function game() {
  gameRound(playerSelection, computerSelection);
}
game();
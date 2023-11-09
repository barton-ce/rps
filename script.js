console.log("Hello World");


let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)]
}

// Need to figure out how to loop to play the game 5 times and keep a score then return the winner. 
function game() {

  while (playerWin < 5 && computerWin < 5) {
    const playerSelection = prompt('Rock, Paper or Scissors').toLowerCase();
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
  }
  if (playerWin == 5) {
    console.log("You Win! You are Amazing")
  } else {
    console.log("You lose! Beter luck next time.")
  }
}




function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `The player chose ${playerSelection} and the computer chose ${computerSelection} so its a Tie! `;
  }
  else if (playerSelection === "rock" && computerSelection == "scissors") {
    playerWin += 1;
    return `The player chose ${playerSelection} and the computer chose ${computerSelection} ${playerSelection} beats ${computerSelection} Player wins! The score is player: ${playerWin} to computer: ${computerWin} `

  }
  else if (playerSelection === "scissors" && computerSelection == "paper") {
    playerWin += 1;
    return `The player chose ${playerSelection} and the computer chose ${computerSelection} ${playerSelection} beats ${computerSelection}. Player wins! The score is player: ${playerWin} to computer: ${computerWin}`;
  }
  else if (playerSelection === "paper" && computerSelection == "rock") {
    playerWin += 1;
    return `The player chose ${playerSelection} and the computer chose ${computerSelection} ${playerSelection} beats ${computerSelection} Player wins! The score is player: ${playerWin} to computer: ${computerWin}`;
  }
  else {
    computerWin += 1;
    return `The player chose ${playerSelection} and the computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}, Computer Wins. The score is computer: ${computerWin} to player: ${playerWin}`;

  }
};



game();

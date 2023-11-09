console.log("Hello World");

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)]
}

// Need to figure out how to loop to play the game 5 times and keep a score then return the winner. 

function game() {
  function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Enter Your Choice');
    computerSelection = getComputerChoice();
    let playerWin = 0;
    let computerWin = 0;

    if (playerSelection === computerSelection) {
      return `The player chose ${playerSelection} and the computer chose ${computerSelection} so its a Tie! `;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
      playerWin++;
      return `The player chose ${playerSelection} and the computer chose ${computerSelection} ${playerSelection} beats ${computerSelection} Player wins! The score is player: ${playerWin} to computer: ${computerWin} `;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
      playerWin++;
      return `The player chose ${playerSelection} and the computer chose ${computerSelection} ${playerSelection} beats ${computerSelection}. Player wins! The score is player: ${playerWin} to computer: ${computerWin}`;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
      playerWin++;
      return `The player chose ${playerSelection} and the computer chose ${computerSelection} ${playerSelection} beats ${computerSelection} Player wins! The score is player: ${playerWin} to computer: ${computerWin}`;
    }
    else {
      computerWin++;
      return `The player chose ${playerSelection} and the computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}, Computer Wins. The score is computer: ${computerWin} to player: ${playerWin}`;
    }
  };
  console.log(playRound());
}

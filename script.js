function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <1 / 3) {
        return "rock";
    }
    else if (randomNumber < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    const humanChoice = prompt("Choose rock, paper, or scissors:");
    return humanChoice;
}



function playGame() {
    let humanScore = 0;
    let computerScore =0;

    function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase(); 

   if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
   }

   if (
    (humanChoice === 'rock' && computerChoice === "scissors") ||
    (humanChoice === 'paper' && computerChoice === "rock") ||
    (humanChoice ==='scissors' && computerChoice === "paper")
   ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return;
   }

   computerScore++;
   console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());


if (humanScore > computerScore) {
  console.log("You won the game!");
} else if (computerScore > humanScore) {
  console.log("Computer won the game!");
} else {
  console.log("The game is a tie!");
}
}

playGame();




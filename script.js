function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector('#results');
const score = document.querySelector('#score');

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      results.textContent = "It's a tie!";
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

      if (humanScore ===5) {
        results.textContent = "You won the game!";
        return;
      }

    

      score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
      return;
    }

    computerScore++;
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (computerScore === 5) {
        results.textContent = "Computer won the game!";
        return;
    }

    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });

  paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });

  scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });
}

playGame();



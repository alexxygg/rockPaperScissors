/////////////////////////////////
// ROCK, PAPER, SCISSORS
function randomCPUchoice() {
  let options = ["rock", "paper", "scissors"];
  let randomItem = Math.floor(Math.random() * options.length);
  if (randomItem === 0) {
    return "rock";
  } else if (randomItem === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function startGameRPS() {
  let userScore = 0;
  let cpuScore = 0;
  alert("Welcome to ROCK, PAPER, SCISSORS");
  while (userScore < 3 && cpuScore < 3) {
    const user = prompt("Rock, Paper or Scissors?").toLowerCase();
    const cpu = randomCPUchoice();
    randomCPUchoice();
    if (cpu == user) {
      alert("It's a tie!");
    } else if (
      (cpu == "rock" && user == "scissors") ||
      (cpu == "paper" && user == "rock") ||
      (cpu == "scissors" && user == "paper")
    ) {
      cpuScore++;
      alert(`CPU WINS: ${cpu} beats ${user}`);
      alert(`Score: YOU-->${userScore} CPU-->${cpuScore}`);
    } else if (
      (user == "rock" && cpu == "scissors") ||
      (user == "paper" && cpu == "rock") ||
      (user == "scissors" && cpu == "paper")
    ) {
      userScore++;
      alert(`YOU WIN: ${user} beats ${cpu}`);
      alert(`Score: YOU-->${userScore} CPU-->${cpuScore}`);
    } else {
      alert("Please enter a valid input.");
    }
  }
  if (userScore === 3) {
    alert(`YOU WIN!!! Score: YOU-->${userScore} CPU-->${cpuScore} `);
    return;
  } else {
    alert(`YOU LOSE!!! Score: YOU-->${userScore} CPU-->${cpuScore} `);
    return;
  }
}

startGameRPS();

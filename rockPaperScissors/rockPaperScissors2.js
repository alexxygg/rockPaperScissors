const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const newGame = document.querySelector("#newGame");

const cpuScoreDisplay = document.querySelector("#cpuScore");
const humanScoreDisplay = document.querySelector("#humanScore");

const gameStatus = document.querySelector("#gameStatus");
const gameStatus2 = document.querySelector("#gameStatus2");

humanScoreDisplay.innerHTML = 0;
cpuScoreDisplay.innerHTML = 0;

let userChoice;

const options = ["rock", "paper", "scissors"];

let getOptionChosen = function () {
  let optionChosen = Math.floor(Math.random() * options.length);
  return optionChosen;
};

let humanScore = 0;
let cpuScore = 0;

rock.addEventListener("click", function (event) {
  console.log("Rock clicked.");
  userChoice = event.target.value;
  //Makes logic work!!!
  let optionChosen = getOptionChosen();

  console.log(optionChosen);

  if (optionChosen == 1 && userChoice == "rock") {
    cpuScore++;
    cpuScoreDisplay.innerHTML = cpuScore;
    gameStatus.innerHTML = "Point for CPU.";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  } else if (optionChosen == 2 && userChoice == "rock") {
    humanScore++;
    humanScoreDisplay.innerHTML = humanScore;
    gameStatus.innerHTML = "Point for HUMAN.";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  } else if (optionChosen == 0 && userChoice == "rock") {
    gameStatus.innerHTML = "It's a tie";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  }
  if (humanScore === 5 || cpuScore === 5) {
    gameStatus.innerHTML = "GAME OVER";
    humanScore = 0;
    humanScoreDisplay.innerHTML = 0;
    cpuScore = 0;
    cpuScoreDisplay.innerHTML = 0;
  }
  return;
});

paper.addEventListener("click", function (event) {
  console.log("Paper clicked.");
  userChoice = event.target.value;
  //Makes logic work!!!
  let optionChosen = getOptionChosen();

  console.log(optionChosen);

  if (optionChosen == 2 && userChoice == "paper") {
    cpuScore++;
    cpuScoreDisplay.innerHTML = cpuScore;
    gameStatus.innerHTML = "Point for CPU.";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  } else if (optionChosen == 0 && userChoice == "paper") {
    humanScore++;
    humanScoreDisplay.innerHTML = humanScore;
    gameStatus.innerHTML = "Point for HUMAN.";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  } else if (optionChosen == 1 && userChoice == "paper") {
    gameStatus.innerHTML = "It's a tie";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  }
  if (humanScore === 5 || cpuScore === 5) {
    gameStatus.innerHTML = "GAME OVER";
    humanScore = 0;
    humanScoreDisplay.innerHTML = 0;
    cpuScore = 0;
    cpuScoreDisplay.innerHTML = 0;
  }
  return;
});

scissors.addEventListener("click", function (event) {
  console.log("Scissors clicked.");
  userChoice = event.target.value;
  //Makes logic work!!!
  let optionChosen = getOptionChosen();

  console.log(optionChosen);

  if (optionChosen == 0 && userChoice == "scissors") {
    cpuScore++;
    cpuScoreDisplay.innerHTML = cpuScore;
    gameStatus.innerHTML = "Point for CPU.";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  } else if (optionChosen == 1 && userChoice == "scissors") {
    humanScore++;
    humanScoreDisplay.innerHTML = humanScore;
    gameStatus.innerHTML = "Point for HUMAN.";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  } else if (optionChosen == 2 && userChoice == "scissors") {
    gameStatus.innerHTML = "It's a tie";
    gameStatus2.innerHTML = `Score: YOU:${humanScore} CPU:${cpuScore}`;
    gameStatus3.innerHTML = `YOU PLAYED:"${userChoice}" CPU PLAYED:${options[optionChosen]}"`;
  }
  if (humanScore === 5 || cpuScore === 5) {
    gameStatus.innerHTML = "GAME OVER";
    humanScore = 0;
    humanScoreDisplay.innerHTML = 0;
    cpuScore = 0;
    cpuScoreDisplay.innerHTML = 0;
  }
  return;
});

// for (let i = 0; i < 10; i++) {
function playGame() {
  gameStatus.innerHTML = "Make your selection.";
  //   optionChosen;
}

newGame.addEventListener("click", () => {
  playGame();
});

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result h1");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const myChoise = document.querySelector(".my_choise");
const compChoise = document.querySelector(".computer_choise");
const icon = document.createElement("i");
icon.classList.add("fa-regular");

let cScore = 0;
let pScore = 0;
function playerSelection() {
  rock.addEventListener("click", () => {
    playRound("rock");
    myChoise.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
  });
  paper.addEventListener("click", () => {
    playRound("paper");
    myChoise.innerHTML = `<i class="fa-regular fa-hand"></i>`;
  });
  scissors.addEventListener("click", () => {
    playRound("scissors");
    myChoise.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
  });
}

function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const icons = [
    `fa-regular fa-hand-rock`,
    `fa-regular fa-hand`,
    `fa-regular fa-hand-scissors`,
  ];
  const randomChoise = Math.floor(Math.random() * 3);

  if (playerSelection === "rock" && choices[randomChoise] === "paper") {
    result.innerHTML = "You Lose 😓! ";
    compChoise.innerHTML = `<i class="${icons[randomChoise]}"></i>`;
    cScore += 1;
    computerScore.innerHTML = cScore;
  } else if (
    playerSelection === "paper" &&
    choices[randomChoise] === "scissors"
  ) {
    result.innerHTML = "You Lose 😓! ";
    cScore += 1;
    compChoise.innerHTML = `<i class="${icons[randomChoise]}"></i>`;

    computerScore.innerHTML = cScore;
  } else if (
    playerSelection === "scissors" &&
    choices[randomChoise] === "rock"
  ) {
    result.innerHTML = "You Lose 😓! ";
    cScore += 1;
    compChoise.innerHTML = `<i class="${icons[randomChoise]}"></i>`;

    computerScore.innerHTML = cScore;
  } else if (
    playerSelection === "rock" &&
    choices[randomChoise] === "scissors"
  ) {
    result.innerHTML = `You Win 🎉!`;
    pScore += 1;
    compChoise.innerHTML = `<i class="${icons[randomChoise]}"></i>`;

    playerScore.innerHTML = pScore;
  } else if (playerSelection === "paper" && choices[randomChoise] === "rock") {
    result.innerHTML = `You Win 🎉!`;
    pScore += 1;
    compChoise.innerHTML = `<i class="${icons[randomChoise]}"></i>`;

    playerScore.innerHTML = pScore;
  } else if (
    playerSelection === "scissors" &&
    choices[randomChoise] === "paper"
  ) {
    result.innerHTML = `You Win 🎉!`;
    pScore += 1;
    compChoise.innerHTML = `<i class="${icons[randomChoise]}"></i>`;

    playerScore.innerHTML = pScore;
  } else {
    result.innerHTML = `It's Tie 👻!`;
    compChoise.innerHTML = `<i class="${icons[randomChoise]}"></i>`;
  }
}

playerSelection();


const imageChoices = [
  "image/rock.jpg",
  "image/paper.jpg",
  "image/Scissor.jpg"
];

const nameChoices = ["ROCK", "PAPER", "SCISSOR"];

let currentChoice = 0;
let currentStreak = 0;
let highScore = 0;

const personImg = document.getElementById("personImage");
const personButton = document.getElementById("choiceButton");
const computerImg = document.getElementById("computerImage");
const computerButton = document.getElementById("computerButton");
const startButton = document.querySelector(".startButton");

const resultModal = document.getElementById("resultModal");
const resultText = document.getElementById("resultText");

function cyclePersonChoice() {
  currentChoice = (currentChoice + 1) % imageChoices.length;
  personImg.src = imageChoices[currentChoice];
  personButton.textContent = nameChoices[currentChoice];
}
startButton.addEventListener("click", startGame);

function startGame() {
  const compChoice = Math.floor(Math.random() * 3);

  computerImg.src = imageChoices[compChoice];
  computerButton.textContent = nameChoices[compChoice];

  declareWinner(currentChoice, compChoice);
}

function declareWinner(playerIndex, compIndex) {
  let result = "";

  if (playerIndex === compIndex) {
    result = "😐 It's a Draw!";
    currentStreak = 0; 
  } else if (
    (playerIndex === 0 && compIndex === 2) ||
    (playerIndex === 1 && compIndex === 0) ||
    (playerIndex === 2 && compIndex === 1)
  ) {
    result = "🎉 You Win!";
    currentStreak++;
    if (currentStreak > highScore) highScore = currentStreak;
  } else {
    result = "😢 You Lose!";
    currentStreak = 0;
  }

  resultText.textContent = result;
  document.getElementById("streakText").textContent = `Streak: ${currentStreak} | High Score: ${highScore}`;
  resultModal.style.display = "flex";
}

function resetGame() {
  resultModal.style.display = "none";

  currentChoice = 0;
  personImg.src = "image/rock.jpg";
  personButton.textContent = "ROCK";

  computerImg.src = "image/Question mark.jpg";
  computerButton.textContent = "?????";
}


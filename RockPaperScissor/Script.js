const imageChoices = [
  "image/rock.jpg",
  "image/paper.jpg",
  "image/Scissor.jpg"
];

const nameChoices = [
  "ROCK",
  "PAPER",
  "SCISSOR"
];

let currentChoice = 0;

function cyclePersonChoice() {
  currentChoice = (currentChoice + 1) % imageChoices.length;
  document.getElementById("personImage").src = imageChoices[currentChoice];
  document.getElementById("choiceButton").textContent = nameChoices[currentChoice];
}

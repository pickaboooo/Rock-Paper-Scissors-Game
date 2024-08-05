let winCount = document.getElementById("winCount");
let tieCount = document.getElementById("tieCount");
let loseCount = document.getElementById("loseCount");

let display = document.querySelector(".display");

let computerDisplay = document.querySelector(".computerDisplay");
let playerDisplay = document.querySelector(".playerDisplay");

let reset = document.getElementById("reset");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let score = {
  wins: 0,
  tie: 0,
  loses: 0
}

let moveChoices = ['rock', 'paper', 'scissors'];

function generateMove() {
  randomMove = Math.floor(Math.random() * moveChoices.length);
  pickMove = moveChoices[randomMove];

  if (pickMove == 'rock') {
    computerDisplay.src = "rock.png";
  }

  else if (pickMove == 'paper') {
    computerDisplay.src = "paper.png";
  }

  else {
    computerDisplay.src = "scissors.png";
  }

  return pickMove;
}

function displayScore() {
  winCount.textContent = score.wins;
  tieCount.textContent = score.tie;
  loseCount.textContent = score.loses;
}

function win() {
  display.textContent = 'You win!';
}

function tie() {
  display.textContent = `It's a tie!`;
}

function lose() {
  display.textContent = 'You lose!';
}

function displayQuestionMark(){
  computerDisplay.src = 'question-mark.png';
}
rock.addEventListener('click', () => {
  let computerMove = generateMove();
  playerDisplay.src = "rock.png";

  if (computerMove === 'scissors') {
    score.wins++;
    win();
  } else if (computerMove === 'paper') {
    score.loses++;
    lose();
  } else {
    score.tie++;
    tie();
  }

  displayScore();
});


paper.addEventListener('click', () => {
  let computerMove = generateMove();
  playerDisplay.src = "paper.png";

  if (computerMove === 'rock') {
    score.wins++;
    win();
  } else if (computerMove === 'scissors') {
    score.loses++;
    lose();
  } else {
    score.tie++;
    tie();
  }

  displayScore();
});

scissors.addEventListener('click', () => {
  let computerMove = generateMove();
  playerDisplay.src = "rock.png";

  if (computerMove === 'paper') {
    score.wins++;
    win();
  } else if (computerMove === 'rock') {
    score.loses++;
    lose();
  } else {
    score.tie++;
    tie();
  }

  displayScore();
});

reset.addEventListener('click', () => {
  winCount.textContent = score.wins = 0;
  tieCount.textContent = score.tie = 0;
  loseCount.textContent = score.loses = 0;
  
  computerDisplay.src = 'question-mark.png';
  playerDisplay.src = 'question-mark.png';
  
  display.textContent = `Let's play!`;
});

rock.addEventListener("mouseover", () => {
  displayQuestionMark();
  playerDisplay.src = "rock.png";
});

paper.addEventListener("mouseover", () => {
  displayQuestionMark();
  playerDisplay.src = "paper.png";
});

scissors.addEventListener("mouseover", () => {
  displayQuestionMark();
  playerDisplay.src = "scissors.png";
});
"use strict";

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting the conditions of the first intract with game page
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0]; // final scores , index 0 is for player 0 and index 1 is for player 1
let currentScore = 0;
let activePlayer = 0; // active player, 0 for player 0 and 1 for player 1
let isPlaying = true;

// functions :
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Switch the player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice
btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${dice}.png`;

    // conditions :
    // check for roll 1 not happend
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // set score text to current score in dynamically way
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // if roll 1 happend
    else {
      // reset curretn score of active player befor switching players
      switchPlayer();
    }
  }
});

// btn Hold
btnHold.addEventListener("click", function () {
  if (isPlaying) {
    // Add current score to active player score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check score is >= 100
    if (scores[activePlayer] >= 20) {
      //finish the game
      isPlaying = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active--player");
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

// New game button
btnNew.addEventListener("click", function () {
  // set isPlaying to true
  isPlaying = true;

  // Set all scores to 0
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;

  // hide dice
  diceEl.classList.add("hidden");

  // removing player winner and player active
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");

  // set player 1 as starting player
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
});

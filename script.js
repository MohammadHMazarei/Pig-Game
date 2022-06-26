"use strict";

// selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting the conditions of the first intract with game page
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice
btnRoll.addEventListener("click", function () {
  // Generating a random riceroll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceEl.classList.remove("hidden");
});

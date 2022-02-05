"use strict";
// APPLICATION ARCHITECTURE
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let checks = document.querySelector(".check");
let again = document.querySelector(".again");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const body = document.querySelector("body");
function darkMode() {
  body.style.backgroundColor = "rgb(0 0 0 )";
  document.querySelector(".toggle-text").textContent = "Dark Mode";
  document.querySelector(".slider.round").style.backgroundColor =
    "rgb(170, 170, 170)";
}
function lightMode() {
  body.style.backgroundColor = "rgb(255 255 255 / 50%)";
  document.querySelector(".toggle-text").textContent = "Light Mode";
}

//OOP Class

class FindNumber {
  constructor() {
    checks.addEventListener("click", this.checksButton);
    again.addEventListener("click", this.againButton);
    toggleSwitch.addEventListener("change", this.switchTheme);
  }

  checksButton() {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
      displayMessage("Nici un numar!");
    } else if (guess === secretNumber) {
      displayMessage("Numar corect!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guess > secretNumber ? "📈 Prea mult!" : "📉 Prea putin!"
        );
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("💥 Ai pierdut jocul!");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
  switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      darkMode();
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      lightMode();
    }
  }

  againButton() {
    score = 20;
    const resetScore = (document.querySelector(".score").textContent = score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
    displayMessage("Incepe sa ghicesti...");
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
  }
}
const firstPLayer = new FindNumber();

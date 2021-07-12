"use strict";
const result = document.querySelector("#result");
const message = document.querySelector("#message");
const score = document.querySelector("#score");
const hscore = document.querySelector("#h-score");
const input = document.querySelector("#input");
const reset = document.querySelector("#reset");
reset.style.display = 'none';

class Status {
  error(msg) {
    message.textContent = msg
  }
  success() {
    message.textContent = "Correct number";
  }
}

class GuessNumber extends Status {
  constructor(score) {
    super();
    this.score = score;
    this.number = this.generateNumber();
  }
  generateNumber() {
    return Math.floor(Math.random() * this.score) + 1
  }
  confirm(value) {
    if (typeof value !== "number") {
      this.error("Please enter a number");
    } else if (value < this.number) {
      this.score--;
      this.error("Number is too low");
    } else if (value > this.number) {
      this.score--;
      this.error("Number is to0 high");
    } else if (value == this.number) {
      this.success();
      document.body.style.backgroundColor = "green";
    }
    return value == this.number
  }
}

const game = new GuessNumber(20);
function guessValue() {
  var v = game.confirm(+input.value);
  if (v) {
    hscore.textContent = game.score;
    result.textContent = game.number;
    reset.style.display = 'block';
  } else {
    score.textContent = game.score;
  }



  if (game.score == 0) {
    reset.style.display = 'block';
  }
}

reset.addEventListener("click", function () {
  location.reload();
});




console.log(game);
const submitBtn = document.getElementById("submitBtn");
let actualNumber = parseInt((Math.random() * 100) + 1);
const game = document.getElementById("game");
const remaining = document.getElementById("remaining");
const prevguess = document.getElementById("prevguess");
const number = document.getElementById("number");
const warning = document.querySelector(".warning");
const restartBtn = document.getElementById("restartBtn");
const actualNumberBox = document.getElementById("actualNumber");
const result = document.getElementById("result");

let prevGuessList = [];
let chances = 10;

number.addEventListener("input", () => {
    const value = number.value;
    if ((isNaN(value) && value.trim() != "") || (value.trim() === "") || (value.trim() < 1 || value.trim() > 100)) {
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }

    const isInputEmpty = value.trim() === "";
    const isWarningDisplayed = warning.style.display === "block";
    if (isInputEmpty || isWarningDisplayed) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let value = parseInt(number.value);
    chances -= 1;
    prevGuessList.push(value);
    prevguess.innerHTML = prevGuessList;
    remaining.innerHTML = chances;
    if (actualNumber == value) {
        result.innerHTML = "Wow, Congratulation You won the game.";
    }
    else if (chances <= 0) {
        result.innerHTML = `You Lose!<br/>Better Luck Next Time.`;
    } else {
        if (actualNumber < value) {
            result.innerHTML = "Your guess is too high.";
        } else {
            result.innerHTML = "Your guess is too low.";
        }
    }
    if (actualNumber == value || chances <= 0) {
        submitBtn.style.display = "none";
        restartBtn.style.display = "block";
        actualNumberBox.innerText = `Actual Number: ${actualNumber}`;
        actualNumberBox.style.display = "block";
    }
    number.value = "";
});

restartBtn.addEventListener("click", () => {
    chances = 10;
    prevGuessList = [];
    actualNumber = parseInt((Math.random() * 100) + 1);
    submitBtn.style.display = "block";
    restartBtn.style.display = "none";
    actualNumberBox.style.display = "none";
    prevguess.innerHTML = "N/A";
    remaining.innerHTML = chances;
    submitBtn.disabled = true;
    result.innerHTML = "";
})


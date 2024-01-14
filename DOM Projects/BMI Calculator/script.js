const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const inputs = document.querySelectorAll(".myInput");
const warnings = document.querySelectorAll(".warning");
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("result");
const calculationDiv = document.getElementById("calculation");
const guide = document.getElementById("guide");
const calculateAgain = document.getElementById("calculateAgain");

inputs.forEach((input, index) => {
    input.addEventListener("input", (ev) => {
        let value = input.value;
        if ((isNaN(value) && value.trim() != '') || (value.trim() === ' ')) {
            warnings[index].style.display = "block";
        } else {
            warnings[index].style.display = "none";
        }
        // Check if any input field is empty
        const isAnyInputEmpty = Array.from(inputs).reduce((curr, input) => {
            return curr && input.value.trim() !== '';
        }, true);

        // Check if there are any warnings displayed
        const isAnyWarningDisplayed = Array.from(warnings).reduce((curr, warning) => {
            return curr && warning.style.display !== 'block';
        }, true);
        // If there are no warnings displayed and no input fields are empty, enable the submit button
        if (!isAnyWarningDisplayed || !isAnyInputEmpty) {
            calculateBtn.disabled = true;
        } else {
            calculateBtn.disabled = false;
        }
    });
});

calculateBtn.addEventListener("click", () => {
    let height = heightInput.value;
    let weight = weightInput.value;
    height = parseInt(height) / 100;
    weight = parseInt(weight);

    const bmiRatio = (weight / (height * height));
    result.textContent = "Your BMI Ratio = " + bmiRatio.toFixed(2);
    calculationDiv.classList.add("result");
    guide.classList.add("response");
    inputs.forEach((input) => {
        input.value = ""; // Clear each input field
    });
});

calculateAgain.addEventListener("click", () => {
    calculationDiv.classList.remove("result");
    guide.classList.remove("response");
    result.textContent = "";
    calculateBtn.disabled = true;
})

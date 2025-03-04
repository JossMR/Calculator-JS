//Basic Calculator
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateBasic = document.getElementById("calculateBasic");
const resultBasic = document.getElementById("resultBasic");

//IMC Calculator
const resultIMC = document.getElementById("resultIMC");
const calculateIMC = document.getElementById("calculateIMC");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

//Compound Insterest Calculator
const capitalInput = document.getElementById("capital");
const rateInput = document.getElementById("interestRate");
const periodInput = document.getElementById("years");
const calculateInterest = document.getElementById("calculateInterest");
const resultInterest = document.getElementById("resultInterest");

calculateBasic.addEventListener("click", () => {
    // Parse numbers
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operationBasic = operationSelect.value;

    // Validate numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultBasic.textContent = "Error: Enter valid numbers";
        return;
    }

    let resultB;

    // Selected operation
    switch (operationBasic) {
        case "add":
            resultB = addition(num1, num2);
            break;
        case "subtract":
            resultB = subtract(num1, num2);
            break;
        case "multiply":
            resultB = multiply(num1, num2);
            break;
        case "divide":
            resultB = divide(num1, num2);
            break;
        default:
            resultB = "Invalid operation";
    }

    // Show the result
    resultBasic.textContent = resultB;
});
calculateIMC.addEventListener("click", () => {
    // Parse numbers
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Validate numbers
    if (isNaN(height) || isNaN(weight)) {
        resultIMC.textContent = "Error: Enter valid numbers";
        return;
    }
    // Show the result
    resultIMC.textContent = IMC(weight, height);
});
calculateInterest.addEventListener("click", () => {
    // Parse numbers
    const capital = parseFloat(capitalInput.value);
    const rate = parseFloat(rateInput.value);
    const period = parseFloat(periodInput.value);

    // Validate numbers
    if (isNaN(capital) || isNaN(rate) || isNaN(period)) {
        resultInterest.textContent = "Error: Enter valid numbers";
        return;
    }
    // Show the result
    resultInterest.textContent = compoundInterest(capital, rate, period);
});
//Receive two numbers and make an addition
function addition(a, b) {
    return a + b;
}
//Receive two numbers and make a substract
function subtract(a, b) {
    return a - b;
}
//Receive two numbers and make a multiplication
function multiply(a, b) {
    return a * b;
}
//Receive two numbers and make a division
function divide(a, b) {
    if (b === 0) return "Error: Division by zero";
    return a / b;
}
//Receive the weight and the height, returns the IMC
function IMC(weight, height) {
    if (height === 0) return "Error: The height can not be 0";
    return (weight / (height * height)).toFixed(2);
}
//Receive the initial capital, the interest rate(%) and the period(years), returns the compound interest
function compoundInterest(capital, rate, period) {
    return (capital * Math.pow((1 + rate / 100), period)).toFixed(2);
}
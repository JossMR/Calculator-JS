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

// Inicialización del script cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    updateUnitOptions();
    
    // ---- FRACTIONS CALCULATOR ----
    document.getElementById('calculate-fraction').addEventListener('click', function() {
        const num1 = parseInt(document.getElementById('fraction1-num').value) || 0;
        const den1 = parseInt(document.getElementById('fraction1-den').value) || 1;
        const num2 = parseInt(document.getElementById('fraction2-num').value) || 0;
        const den2 = parseInt(document.getElementById('fraction2-den').value) || 1;
        const operation = document.getElementById('fraction-operation').value;
        
        if (den1 === 0 || den2 === 0) {
            alert('El denominador no puede ser cero');
            return;
        }
        
        const result = calculateFraction(num1, den1, num2, den2, operation);
        document.getElementById('result-num').textContent = result.numerator;
        document.getElementById('result-den').textContent = result.denominator;
    });
    
// ---- UNITS CONVERTER ----
    document.getElementById('unit-type').addEventListener('change', updateUnitOptions);
    
    document.getElementById('convert-unit').addEventListener('click', function() {
        const value = parseFloat(document.getElementById('unit-value').value);
        const fromUnit = document.getElementById('unit-from').value;
        const toUnit = document.getElementById('unit-to').value;
        const unitType = document.getElementById('unit-type').value;
        
        if (isNaN(value)) {
            alert('Por favor, ingrese un valor válido');
            return;
        }
        
        const result = convertUnit(value, fromUnit, toUnit, unitType);
        document.getElementById('unit-result').textContent = result.toFixed(2) + ' ' + toUnit;
    });
});

function updateUnitOptions() {
    const unitType = document.getElementById('unit-type').value;
    const fromSelect = document.getElementById('unit-from');
    const toSelect = document.getElementById('unit-to');
    
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    
    const units = getUnitOptions(unitType);
    
    units.forEach(unit => {
        fromSelect.add(new Option(unit.label, unit.value));
        toSelect.add(new Option(unit.label, unit.value));
    });
    
    if (units.length > 1) {
        toSelect.selectedIndex = 1;
    }
}

function getUnitOptions(unitType) {
    switch(unitType) {
        case 'length':
            return [
                { value: 'm', label: 'Meters (m)' },
                { value: 'km', label: 'Kilometers (km)' },
                { value: 'cm', label: 'Centimeters (cm)' },
                { value: 'mm', label: 'Milimeters (mm)' }
            ];
        case 'mass':
            return [
                { value: 'g', label: 'Grams (g)' },
                { value: 'kg', label: 'Kilograms (kg)' },
                { value: 'mg', label: 'Miligrams (mg)' }
            ];
        case 'volume':
            return [
                { value: 'l', label: 'Liters (l)' },
                { value: 'ml', label: 'Mililitros (ml)' }
            ];
        case 'temperature':
            return [
                { value: 'c', label: 'Celsius (°C)' },
                { value: 'f', label: 'Fahrenheit (°F)' }
            ];
        default:
            return [];
    }
}

const distanceInput = document.getElementById('distance-input');
const timeInput = document.getElementById('time-input');
const speedInput = document.getElementById('speed-input');

function reCalculateDistanceTimeSpeed() {
    distance = parseFloat(distanceInput.value);
    time = parseFloat(timeInput.value);
    speed = parseFloat(speedInput.value);
    /*Check resets */
    if(isNaN(distance) || isNaN(time) || isNaN(speed)){
        if(distanceInput.disabled){
            distanceInput.value = '';
            distance =  parseFloat(distanceInput.value);
            distanceInput.disabled = false;
        }
        if(timeInput.disabled){
            timeInput.value = '';
            time = parseFloat(timeInput.value);
            timeInput.disabled = false;
        }
        if(speedInput.disabled){
            speedInput.value = '';
            speed = parseFloat(speedInput.value);
            speedInput.disabled = false;
        }
    }
    /*Check for new combination*/
    if (!isNaN(distance) && !isNaN(time) && isNaN(speed)) {
        speedInput.disabled = true;
    } else if (!isNaN(distance) && isNaN(time) && !isNaN(speed)) {
        timeInput.disabled = true;
    } else if (isNaN(distance) && !isNaN(time) && !isNaN(speed)) {
        distanceInput.disabled = true;
    }

    /*Update*/
    if(distanceInput.disabled){
        distanceInput.value = calcularDistancia(speed, time);
    }
    if(timeInput.disabled){
        timeInput.value = calcularTiempo(distance, speed);
    }
    if(speedInput.disabled){
        speedInput.value = calcularVelocidad(distance, time);
    }
}

distanceInput.addEventListener('input', reCalculateDistanceTimeSpeed);
timeInput.addEventListener('input', reCalculateDistanceTimeSpeed);
speedInput.addEventListener('input', reCalculateDistanceTimeSpeed);

// ---- QUADRATIC EQUATION CALCULATOR ----
document.addEventListener('DOMContentLoaded', function() {
    // Add this to your existing DOMContentLoaded event listener
    // or create a new one if needed

    // Quadratic Equation Solver
    const calculateQuadratic = document.getElementById('calculate-quadratic');
    const coefA = document.getElementById('coef-a');
    const coefB = document.getElementById('coef-b');
    const coefC = document.getElementById('coef-c');
    const quadraticResult = document.getElementById('quadratic-result');

    calculateQuadratic.addEventListener('click', function() {
        const a = parseFloat(coefA.value) || 0;
        const b = parseFloat(coefB.value) || 0;
        const c = parseFloat(coefC.value) || 0;

        const result = solveQuadraticEquation(a, b, c);

        let resultText = '';

        if (result === "Not a valid equation") {
            resultText = "Not a valid equation (a and b cannot both be zero)";
        } else if (result.type === "linear") {
            resultText = `This is a linear equation with solution: x = ${result.x}`;
        } else if (result.type === "two_real") {
            resultText = `Two real solutions: x₁ = ${result.x1} and x₂ = ${result.x2}`;
        } else if (result.type === "one_real") {
            resultText = `One real solution (double root): x = ${result.x}`;
        } else if (result.type === "complex") {
            resultText = `Complex solutions: x₁ = ${result.realPart} + ${result.imaginaryPart}i and x₂ = ${result.realPart} - ${result.imaginaryPart}i`;
        }

        quadraticResult.textContent = resultText;
    });
});

// ---- AGE CALCULATOR ----
document.addEventListener('DOMContentLoaded', function() {
    // Add this to your existing DOMContentLoaded event listener
    // or create a new one if needed

    const birthDateInput = document.getElementById('birth-date');
    const useCustomDateCheckbox = document.getElementById('use-custom-date');
    const referenceDateContainer = document.getElementById('reference-date-container');
    const referenceDateInput = document.getElementById('reference-date');
    const calculateAgeButton = document.getElementById('calculate-age');
    const ageResult = document.getElementById('age-result');
    const ageYears = document.getElementById('age-years');
    const ageMonths = document.getElementById('age-months');
    const ageDays = document.getElementById('age-days');

    // Set default value for reference date (today)
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10); // Format as YYYY-MM-DD
    referenceDateInput.value = formattedDate;

    // Toggle reference date input visibility
    useCustomDateCheckbox.addEventListener('change', function() {
        referenceDateContainer.style.display = this.checked ? 'block' : 'none';
    });

    calculateAgeButton.addEventListener('click', function() {
        const birthDate = new Date(birthDateInput.value);

        // Check if birth date is valid
        if (isNaN(birthDate.getTime())) {
            ageResult.textContent = "Please enter a valid birth date";
            ageYears.textContent = "";
            ageMonths.textContent = "";
            ageDays.textContent = "";
            return;
        }

        const referenceDate = useCustomDateCheckbox.checked ?
            new Date(referenceDateInput.value) : new Date();

        // Check if reference date is valid
        if (isNaN(referenceDate.getTime())) {
            ageResult.textContent = "Please enter a valid reference date";
            ageYears.textContent = "";
            ageMonths.textContent = "";
            ageDays.textContent = "";
            return;
        }

        const age = calculateAge(birthDate, referenceDate);

        if (age.error) {
            ageResult.textContent = age.error;
            ageYears.textContent = "";
            ageMonths.textContent = "";
            ageDays.textContent = "";
        } else {
            ageResult.textContent = `${age.years} years, ${age.months} months, and ${age.days} days`;
            ageYears.textContent = `Total years: ${age.years}`;
            ageMonths.textContent = `Total months: ${age.years * 12 + age.months}`;
            ageDays.textContent = `Total days: ${age.totalDays}`;
        }
    });
});
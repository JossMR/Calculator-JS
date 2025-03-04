//Receive two numbers and make an addition
function addition(a, b) {
    return (a + b).toFixed(2);
}
//Receive two numbers and make a substract
function subtract(a, b) {
    return (a - b).toFixed(2);
}
//Receive two numbers and make a multiplication
function multiply(a, b) {
    return (a * b).toFixed(2);
}
//Receive two numbers and make a division
function divide(a, b) {
    if (b === 0) return "Error: Division by zero";
    return (a / b).toFixed(2);
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
// ---- FRACTIONS CALCULATOR ----

/* Calculate the greatest common divisor of two numbers */
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

function simplifyFraction(numerator, denominator) {
    if (numerator === 0) {
        return { numerator: 0, denominator: 1 };
    }
    
    const sign = (numerator < 0) !== (denominator < 0) ? -1 : 1;
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    const divisor = gcd(numerator, denominator);
    
    return {
        numerator: sign * (numerator / divisor),
        denominator: denominator / divisor
    };
}

/* Solve Fractions Operations */
function calculateFraction(num1, den1, num2, den2, operation) {
    let resultNum, resultDen;
    
    switch (operation) {
        case 'add':
            resultNum = num1 * den2 + num2 * den1;
            resultDen = den1 * den2;
            break;
        case 'subtract':
            resultNum = num1 * den2 - num2 * den1;
            resultDen = den1 * den2;
            break;
        case 'multiply':
            resultNum = num1 * num2;
            resultDen = den1 * den2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("It is not allowed to divide by zero");
                return { numerator: 0, denominator: 1 };
            }
            resultNum = num1 * den2;
            resultDen = den1 * num2;
            break;
        default:
            return { numerator: 0, denominator: 1 };
    }
    return simplifyFraction(resultNum, resultDen);
}

// ---- Unit Converter Function ----

function convertUnit(value, fromUnit, toUnit, unitType) {
    if (fromUnit === toUnit) {
        return value;
    }
    
    switch (unitType) {
        case 'length':
            return convertLength(value, fromUnit, toUnit);
        
        case 'mass':
            return convertMass(value, fromUnit, toUnit);
            
        case 'volume':
            return convertVolume(value, fromUnit, toUnit);
            
        case 'temperature':
            return convertTemperature(value, fromUnit, toUnit);
            
        default:
            return value;
    }
}

function convertLength(value, fromUnit, toUnit) {
    const toMeters = {
        'm': 1,
        'km': 1000,
        'cm': 0.01,
        'mm': 0.001
    };
    const meters = value * toMeters[fromUnit];
    
    return meters / toMeters[toUnit];
}

function convertMass(value, fromUnit, toUnit) {
    const toGrams = {
        'g': 1,
        'kg': 1000,
        'mg': 0.001
    };
    
    const grams = value * toGrams[fromUnit];
    return grams / toGrams[toUnit];
}

function convertVolume(value, fromUnit, toUnit) {
    const toLiters = {
        'l': 1,
        'ml': 0.001
    };
    const liters = value * toLiters[fromUnit];
    return liters / toLiters[toUnit];
}
function convertTemperature(value, fromUnit, toUnit) {
    let celsius;
    
    if (fromUnit === 'c') {
        celsius = value;
    } else if (fromUnit === 'f') {
        celsius = (value - 32) * 5/9;
    }
    
    if (toUnit === 'c') {
        return celsius;
    } else if (toUnit === 'f') {
        return (celsius * 9/5) + 32;
    }
    
    return value;
}

// ---- SPEED / TIME / DISTANCE CALCULATOR ----
function calcularVelocidad(distancia, tiempo) {
    return (distancia / tiempo).toFixed(2);
}

function calcularTiempo(distancia, velocidad) {
    return (distancia / velocidad).toFixed(2);
}

function calcularDistancia(velocidad, tiempo) {
    return (velocidad * tiempo).toFixed(2);
}

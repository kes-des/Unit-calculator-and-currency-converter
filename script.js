// Length Converter

const lengthFrom = document.getElementById("lengthFrom");
const lengthTo = document.getElementById("lengthTo");
const lengthValue = document.getElementById("lengthValue");
const lengthResult = document.getElementById("lengthResult");

function convertLength() {
    const from = lengthFrom.value;
    const to = lengthTo.value;
    const value = parseFloat(lengthValue.value);
    
    if (from === to) {
        lengthResult.value = value;
        return;
    }
    
    const ratios = {
        millimeters: 1,
        centimeters: 10,
        meters: 1000,
        kilometers: 1000000,
        inches: 25.4,
        feet: 304.8,
        yards: 914.4,
        miles: 1609344
    };
    
    const result = value * ratios[from] / ratios[to];
    lengthResult.value = result.toFixed(4);
}

lengthFrom.addEventListener("change", convertLength);
lengthTo.addEventListener("change", convertLength);
lengthValue.addEventListener("input", convertLength);

// Weight Converter

const weightFrom = document.getElementById("weightFrom");
const weightTo = document.getElementById("weightTo");
const weightValue = document.getElementById("weightValue");
const weightResult = document.getElementById("weightResult");

function convertWeight() {
    const from = weightFrom.value;
    const to = weightTo.value;
    const value = parseFloat(weightValue.value);
    
    if (from === to) {
        weightResult.value = value;
        return;
    }
    
    const ratios = {
        grams: 1,
        kilograms: 1000,
        ounces: 28.35,
        pounds: 453.59
    };
    
    const result = value * ratios[from] / ratios[to];
    weightResult.value = result.toFixed(4);
}

weightFrom.addEventListener("change", convertWeight);
weightTo.addEventListener("change", convertWeight);
weightValue.addEventListener("input", convertWeight);

// Temperature Converter

const tempFrom = document.getElementById("tempFrom");
const tempTo = document.getElementById("tempTo");
const tempValue = document.getElementById("tempValue");
const tempResult = document.getElementById("tempResult");

function convertTemp() {
    const from = tempFrom.value;
    const to = tempTo.value;
    const value = parseFloat(tempValue.value);
    
    if (from === to) {
        tempResult.value = value;
        return;
    }
    
    let result;
    
    if (from === "celsius") {
        if (to === "fahrenheit") {
            result = value * 9 / 5 + 32;
        } else {
            result = value + 273.15;
        }
    } else if (from === "fahrenheit") {
        if (to === "celsius") {
            result = (value - 32) * 5 / 9;
        } else {
            result = (value - 32) * 5 / 9 + 273.15;
        }
    } else {
        if (to === "celsius") {
            result = value - 273.15;
        } else {
            result = (value - 273.15) * 9 / 5 + 32;
        }
    }
    
    tempResult.value = result.toFixed(4);
}

tempFrom.addEventListener("change", convertTemp);
tempTo.addEventListener("change", convertTemp);
tempValue.addEventListener("input", convertTemp);
function convert() {
    // Get input values
    var amount = parseFloat(document.getElementById('amount').value);
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
  
    // Define conversion rates
    var conversionRates = {
      USD: 1,
      EUR: 0.89,
      GBP: 0.78,
      INR: 81.85
    };
  
    // Calculate result
    var result = (amount / conversionRates[from]) * conversionRates[to];
  
    // Set result value
    document.getElementById('result').value = result.toFixed(2);
  }
  
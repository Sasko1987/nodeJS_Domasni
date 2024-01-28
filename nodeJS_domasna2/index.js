// - Креирање на модул за конверзија на вредности од еден во друг систем
// (mi -> km, c -> f, lbs -> kg, ft -> m)

// - conversion.js
// function convertMilesToKm(1) -> 1.6
// function convertCelsuisToFahrenheit(param)
// function convertPoundsToKilogram(param)
// funtion convertFeetToMetres(param)

// - index.js
// - ovde treba da se koristat

const {
  convertMilesToKm,
  convertCelsuisToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMetres,
} = require("./conversion");

const milesToKm = convertMilesToKm(20);
const celsToFahr = convertCelsuisToFahrenheit(35);
const poundsToKg = convertPoundsToKilogram(80).toFixed(2);
const feetToMeters = convertFeetToMetres(20).toFixed(2);

console.log(`Converted value to kilometers is ${milesToKm}`);
console.log(`Converted value to fahrenheit is ${celsToFahr}`);
console.log(`Converted value to kilograms is ${poundsToKg}`);
console.log(`Converted value to meters is ${feetToMeters}`);

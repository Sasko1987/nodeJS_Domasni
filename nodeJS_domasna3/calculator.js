// function convertMilesToKm(1) -> 1.6
// function convertCelsuisToFahrenheit(param)
// function convertPoundsToKilogram(param)
// funtion convertFeetToMetres(param)

function convertMilesToKm(number) {
  return number * 1.609;
}

function convertCelsuisToFahrenheit(number) {
  return number * 1.8 + 32; // nemozev da ja napisam formulata, vscode mi menuva zagradi, mesto 1,8 treba 9/5
}

function convertPoundsToKilogram(number) {
  return number / 2.205;
}

function convertFeetToMetres(number) {
  return number / 3.281;
}

function moduleNumbers(num1, num2) {
  return num1 % num2;
}

module.exports = {
  convertMilesToKm,
  convertCelsuisToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMetres,
  moduleNumbers,
};

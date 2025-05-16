// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

const celsiusTemp = prompt("Enter a Celsius degree temperature: ")
const fahrenheitTemp = celsiusTemp * (9 / 5) + 32;

alert(`You entered ${celsiusTemp} Celsius Degrees.  This is ${fahrenheitTemp} Fahrenheit Degrees when converted.`);

console.log(`You entered ${celsiusTemp} Celsius Degrees.  This is ${fahrenheitTemp} Fahrenheit Degrees when converted.`)

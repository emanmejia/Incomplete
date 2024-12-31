// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

const celsiusTemp = prompt("Please enter the current temperature in Celsius degrees:");
const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
alert(`The temperature in Celsius degrees is: ${celsiusTemp} and temperature in Fahrenheit degrees is: ${fahrenheitTemp}`);

// added the console log in case I wanted to reference back. 
console.log(`The temperature in Celsius degrees is: ${celsiusTemp} and temperature in Fahrenheit degrees is: ${fahrenheitTemp}`);
// Define the function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;  // Conversion formula
}

// Get input from the user
let fahrenheitInput = parseFloat(prompt("Enter the temperature in Fahrenheit:"));

// Convert the input to Celsius
let celsiusOutput = fahrenheitToCelsius(fahrenheitInput);

// Format the result to 2 decimal places and display the output
console.log(`${fahrenheitInput} degrees Fahrenheit is ${celsiusOutput.toFixed(2)} degrees Celsius`);

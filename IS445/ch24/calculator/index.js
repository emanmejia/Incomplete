const calculator = require("./calculator.js");

// Create an object by calling the exported function of this module
const calc = calculator();

// Use the object's methods
console.log(`2 + 3 = ${calc.add(2, 3)}`); // "2 + 3 = 5"

// If we didn't creat the calc variable, we could use the following syntax:
console.log(`2 + 3 = ${calculator().add(2, 3)}`); // "2 + 3 = 5"
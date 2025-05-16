// Observe the following.

let number1 = 5;
let number2 = 3;

let number3 = number2; // number3 will hold the '3' value.
number2 = number1; // number2 holds number1 value of '5'
number1 = number3; // number1 the '3' value that number3 was holding. 

console.log(number1); // Should show 3
console.log(number2); // Should show 5
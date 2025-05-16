let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));



if (number1 > number2) {
  alert(`The first number ${number1}, is greater than the second number ${number2}.`);
} else if (number1 < number2) {
  alert(`The first number ${number1}, is less than the second number ${number2}.`);
} else {
  alert("Both numbers are equal.");
}
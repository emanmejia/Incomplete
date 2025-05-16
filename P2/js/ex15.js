let number;
do {
  number = prompt("Please enter a number between 2 and 9.");
} while (number < 2 || number > 9);

for (let i = 1; i <= 12; i++) {
  console.log(number + " * " + i + " = " + (number * i));
}
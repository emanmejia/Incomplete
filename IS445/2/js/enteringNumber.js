// Regardless of the entered data, the prompt() command always returns a string value.  If this value is to be use din numerical expressions, it must be converted into a number with the Number() command.

const input = prompt("Enter a number:"); // input's type is string
const nb = Number(input); // nb's type is number
console.log(input);
console.log(`Input times 40 = ${input * 40}`);
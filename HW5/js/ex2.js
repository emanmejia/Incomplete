// Initial array of numbers from 1 to 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. An array of odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log('Odd Numbers:', oddNumbers);

// b. An array of numbers divisible by 2 or 5
const divisibleBy2Or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log('Divisible by 2 or 5:', divisibleBy2Or5);

// c. An array of numbers divisible by 3, squared
const divisibleBy3Squared = numbers.filter(num => num % 3 === 0).map(num => num ** 2);
console.log('Numbers divisible by 3, squared:', divisibleBy3Squared);

// d. The sum of the following: square the numbers divisible by 5
const sumOfSquaresDivisibleBy5 = numbers.filter(num => num % 5 === 0).map(num => num ** 2).reduce((sum, num) => sum + num, 0);
console.log('Sum of squares of numbers divisible by 5:', sumOfSquaresDivisibleBy5);

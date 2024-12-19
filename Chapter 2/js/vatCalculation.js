// Write a program that asks the user for a raw price.  After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const rawPrice = prompt("Please enter the raw price:");
const vatCalculation = rawPrice * 1.206;
alert(`Your raw price was $${rawPrice} and after a 20.6 VAT rate it is: $${vatCalculation}`);

// added the console log in case I wanted to reference back. 
console.log(`Your raw price was $${rawPrice} and after a 20.6 VAT rate it is: $${vatCalculation}`)
// Write a program that asks the user for a raw price.  After that, it calculates the corresponding final price using a VAT rate of 20.6%

let rawPrice = prompt("Enter a product's raw price: "); 
let vatRate = 1.206; // changed from const to let incase the VAT rate changes.
const finalPrice = rawPrice * vatRate;
console.log(`The product's raw price is: $${rawPrice}`);
console.log(`The VAT tax rate is ${vatRate}%`);
console.log(`The product's final price is: $${finalPrice}`);

let rawPrice = Number(prompt("Enter a item's raw price:")); //
let vatRate = 1.206
let finalPrice = rawPrice * vatRate;
console.log(`The raw price is $${rawPrice}, after VAT tax the final price is $${finalPrice}`);
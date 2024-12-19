// 1. Create an array
let musketeers = ["Athos", "Porthos", "Aramis"];

// 2. Show each array element using a for loop
console.log("Using for loop:");
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

// 3. Add the "D'Artagnan" value to the array
musketeers.push("D'Artagnan");

// 4. Show each array element using the forEach() method
console.log("\nUsing forEach():");
musketeers.forEach(function(musketeer) {
  console.log(musketeer);
});

// 5. Remove "Aramis" from the array
let indexToRemove = musketeers.indexOf("Aramis");
if (indexToRemove !== -1) {
  musketeers.splice(indexToRemove, 1); // Removes the element at the found index
}

// 6. Show each array element using a for-of loop
console.log("\nUsing for-of loop:");
for (let musketeer of musketeers) {
  console.log(musketeer);
}

const musketeers = ["Athos", "Porthos", "Aramis"];
//console.log(musketeers[0]); // "Athos"
//console.log(musketeers[1]); // "Porthos"
//console.log(musketeers[2]); // "Aramis"
//console.log(musketeers[3]); // UNDEFINED

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
} // Shows each array element using a for loop.

musketeers.push("D'Artagnan"); // Adds the "D'Artagnan" value to the array.

musketeers.forEach(musketeers => {
  console.log(musketeers);
}); // Shows each array element using the forEach() method


musketeers.splice(2, 1); // remove 1 element starting at index 2.  This removes poor Aramis.

for (const musketeer of musketeers) {
  console.log(musketeer);
} // Shows each array element using a for-of loop, without Aramis. 
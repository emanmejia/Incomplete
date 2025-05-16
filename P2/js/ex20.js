// Let's define the min() function, without using Math.min() function JS has predfined.

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

// alternative test with fat arrow function.

const min2 = (a, b) => a < b ? a : b;
console.log(min2(4.5, 5));
console.log(min2(19, 9));
console.log(min2(1, 2));
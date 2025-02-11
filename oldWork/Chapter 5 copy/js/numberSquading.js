// Square the given number x
function square1(x) {
  return x * x; // Return the square of x
}

// Square the given number x (using arrow function)
const square2 = x => x * x; // Return the square of x

console.log(square1(0)); // 0
console.log(square1(2)); // 4
console.log(square1(5)); // 25

console.log(square2(0)); // 0
console.log(square2(4)); // 16
console.log(square2(10)); // 100

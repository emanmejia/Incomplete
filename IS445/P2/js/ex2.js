let a = 2;
a -= 1;
a++; // 2
let b = 8;
b += 2; // 10

// a = 2, b = 10.

const c = a + b * b;  // 102
const d = a * b + b;  // 30
const e = a * (b + b);  // 40
const f = a * b / a;  // 10
const g = b / a * a;  // 10
console.log(a, b, c, d, e, f, g);
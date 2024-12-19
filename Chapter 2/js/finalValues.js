let a = 2;
a -= 1;
a++;
// console.log(a);
// result = 2

let b = 8;
b += 2;
// console.log(b); 
// result = 10

const c = a + b * b; // 102
const d = a * b + b; // 30 
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a; // 10
console.log(a, b, c, d, e, f, g);

// Observe the following and predict the final values of its variables.

let a = 2; // a=2
a -= 1; // a=1
a++; // a=2
let b = 8; // b=8
b += 2; // b=10     a = 2.  b = 10
const c = a + b * b; // c=2+10*10 = 102
const d = a * b + b; // d=2*10+10 = 30
const e = a * (b + b); // e=2*(10+10) = 40
const f = a * b / a; // f=2*10/2 = 10
const g = b / a * a; // g=10/2*2 = 10
console.log(a, b, c, d, e, f, g); // 2, 10, 102, 30, 40, 10, 10 
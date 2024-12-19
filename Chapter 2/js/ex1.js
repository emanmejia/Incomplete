let a;
a = 3.14;
console.log(a);

const b = 3;
let c = b;
c = c + 1;
console.log(b);
console.log(c);

/*let e = 3 + 2 * 4; // e contains 11 (3 + 8)
e = (3 + 2) * 4;   // e contains 20 (5 * 4) */

let e = 3 + 2 * 4;
console.log(e);

e = (3 + 2) * 4;
console.log(e);

c = a + (b * e);  // multiplying e(20) and b(3), plus adding 3.14 from a
console.log(c); 

/*
const country = "France";
console.log(`I live in ${country}`); // Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Show "3 + 7 = 10" */

const division = "Informaiton Management";
console.log(`I work in the ${division} division.`);
const x = 4;
const y = 20;
console.log(`${x} + ${y} = ${x + y}`) ; // this will show "4 + 20 = 24"
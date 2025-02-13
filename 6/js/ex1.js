// Creating my first Object.

/*
const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic"
};
*/

const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic"
};

console.log(pen.type); // ballpoint
console.log(pen.color); // blue
console.log(pen.brand); //Bic

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

// This is modifying an object.  You are passing a new value onto pen.color

pen.color = "red";
console.log(`They write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

// Dynamically add new properties to an already created object.  

pen.price = "2.99" // Set the pen price property

console.log(`My pen costs $${pen.price}.`);
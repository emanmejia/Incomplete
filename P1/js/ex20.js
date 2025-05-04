// Modifying an object.

// Once an object is created, you can change the value of its properties with the xyntax [myObject.myProperty = newValue].

const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "BIC"
};  

console.log(`I like to write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.color = "red"; // Modifying the pen color property

console.log(`I also like to write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

// You can even dynamically add new properties to an already created object.

pen.price = "4.50"; // Set the pen price.

console.log(`My pens costs $${pen.price} a pack.`);
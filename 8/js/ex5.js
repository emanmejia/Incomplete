// Turning a string into an array.

/*The JavaScript method Array.from() can be used to turn a string into an array. This array can further be traversed with the forEach() method. Just like the previous ones, this example shows the string letters one-by-one.*/

const name = "Emmanuel"
const nameArray = Array.from(name);
nameArray.forEach(letter => {
  console.log(letter);
});
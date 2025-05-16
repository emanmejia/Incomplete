// There's another operator for when you know what you don't want: the not operator!  You'll use a ! for this. 

const number = Number(prompt("Enter a number:"));
if (!(number > 100)) {
  console.log (`${number} is less than or equal to 100`)
}
// You want to check if a number is outside  0 and 100.  Number should be less than 0 or greater than 100.

// this uses the "or" operator || ("logical or)" makes statements true if at least one of the statements is true.  )

const number = Number(prompt("Enter a number:"));
if ((number < 0) || (number > 100)) {
  console.log(`${number} is not in between 0 and 100`)
}
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25
};
 
// Return the character description.  The describe() function takes an object as a parameter, access it's properties and creates the description string.  
function describe(character) {
  return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
} 


// This is an alternative approach by having describe() inside the object.
const bobby = {
  name: "Bobby",
  health: 100,
  strength: 30,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
  }
};

// An object whos value is a function is called a method.  Methods are used to define actions for an object.  A method adds some behavior to an object.  

console.log(describe(aurora));
console.log(describe(bobby));

// console.log(aurora.describe()); ERRORS OUT - aurora.describe is not a function.
console.log(bobby.describe());
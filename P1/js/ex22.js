// Introducing methods, we had to write length console.log statements each time to show our character state.  There's a cleaner way below.

// Adding a method to an object.

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25
};

// Return the character description using describe() property inside the object.
function describe(character) {
  return `${character.name} has ${character.health} health points and ${character.strength} as strength.`;
}

console.log(describe(aurora));  // this calls the describe() function with the aurora object as an argument.  The fucntion is external to the object.  This is an example of procedural programming. 

// An object whose value is a function is called a METHOD.  Methods are used to define actions for an object.  A method adds some behavior to an object.

const anthony = {
  name: "Anthony",
  health: 150,
  strength: 25,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength`;
  }
};

console.log(anthony.describe());  // this calls the describe() function on the Anthony object as an argument.  The function is one of the object's properties: it is a method.  This is an example of object-oriented programming.

// To call method named myMethod() an object myObject, the syntax is myObject.myMethod()


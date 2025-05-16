// Create three functions
const sayHello = name => `Hello, ${name}`;
const flatter = () => `Look how gorgeous you are today!`;
const sayGoodbye = name => `Goodbye, ${name}`;

// Export two of them
module.exports.sayHello = sayHello;
// module.exports.newName = sayHello;  // Test exporting using a different name
module.exports.flatter = flatter;
module.exports.sayGoodbye = sayGoodbye; // Test exporting all three functions


// Concise Code Method Below
// To test - Comment code above and uncomment code below

// // Create and export two functions
// module.exports.sayHello = name => `Hello, ${name}`;
// module.exports.flatter = () => `Look how gorgeous you are today!`;

// // Create a non-exported function
// const sayGoodbye = name => `Goodbye, ${name}`;

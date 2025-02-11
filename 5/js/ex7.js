function sayHello(name) {
    const message = `Hello, ${name}!`;
    return message;
}

let name = "Carlos";
console.log(sayHello(name)); // "Hello, Carlos!"
name = "Sainz";
console.log(sayHello(name)); // "Hello, Sainz!"
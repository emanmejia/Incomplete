/*
You can declare variables inside a function, as in the example below.

The function sayHello() declares a variable named message and returns its value.

The variable decalred in the body of a function are called local variable.  Their scope is limited to the function body (hence their name).  If you try to use these local variables outside the function, you won't be able to.

*/

function sayHello() {
    const message = "Hello!";
    return message;
}

console.log(sayHello()); // "Hello!"
console.log(message); // Error the message vairbale is not visible Headers. 
// Adding a node before another one

// THEN REPLACING THAT ONE

// FINALLY, REMOVE THAT THING!

const perlElement = document.createElement("li"); // Create an "li" element
perlElement.id = "perl";
perlElement.textContent = "Perl"; // Set the text content to "Perl"
document.getElementById("languages").insertBefore(perlElement, document.getElementById("php")); // Insert the new element before the "PHP" element in the DOM


document.getElementById(`languages`).insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>'); // Add an element to beginning of the list. 

// Replacing a node

const lispElement = document.createElement("li");
lispElement.id = "lisp";
lispElement.textContent = "Lisp"; // Set the text content to "Lisp"
document.getElementById("languages").replaceChild(lispElement, document.getElementById("perl")); // Replace the "Perl" element with the new "Lisp" element in the 

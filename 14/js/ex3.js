// Show element with the ID "new"
console.log(document.getElementById("new"));

// All "ancient" wonders that still exist, this is interesting because you are searching for ancient in the exists class. 
console.log(document.getElementById("ancient").getElementsByClassName("exists").length); // 1


// Additioinal syntax, let's learn two new methods that make finding elements easier.

// All paragraphs
console.log(document.querySelectorAll("p").length); // 3

// All paragraphs inside the "content" ID block
console.log(document.querySelectorAll("#content p").length); // 2

// All elements with the "exists" class
console.log(document.querySelectorAll(".exists").length); // 8

// All "ancient" wonders that still exist
console.log(document.querySelectorAll("#ancient > .exists").length); // 1
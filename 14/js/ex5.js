// All paragraphs
console.log(document.querySelectorAll("p").length); // 3

// All paragraphs inside the "content" ID block
console.log(document.querySelectorAll("#content p").length); // 2

// All elements with the "exists" class
console.log(document.querySelectorAll(".exists").length); // 8

// All "ancient" wonders that still exist
console.log(document.querySelectorAll("#ancient > .exists").length); // 1

// Show the first paragraph
console.log(document.querySelector("p")); // <p>

// Show the first H3
console.log(document.querySelector("h3")); // null (non exists)


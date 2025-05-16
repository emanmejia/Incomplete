
const titleElement = document.querySelector("h3");  // Grab the first h3
console.log(titleElement); // Show the first h3 element with the class "beginning"
titleElement.classList.remove("beginning");
titleElement.classList.add("title"); // renames titleElement
console.log(titleElement); // Show the first h3 element with the class "title"
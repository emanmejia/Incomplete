// Creating and Setting Elements in the DOM

const pythonElement = document.createElement("li"); // Create an li element
pythonElement.id = "python"; // Set the id attribute to "python"
pythonElement.textContent = "Python"; // Set the text content to "Python"

document.getElementById("languages").appendChild(pythonElement); // Insert the new element into the DOM
console.log(`Same as example 6, but it would be more effort to change 7-14, so here is an encore my friend!`)
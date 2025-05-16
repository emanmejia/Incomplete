// Creating and Setting Elements in the DOM

const cElement = document.createElement("li"); // Create an li element
cElement.id = "c"; // Set the id attribute to "c"
cElement.textContent = "C"; // Set the text content to "C"

const pythonElement = document.createElement("li"); // Create an li element
pythonElement.id = "python"; // Set the id attribute to "python"
pythonElement.textContent = "Python"; // Set the text content to "Python"

const rubyElement = document.createElement("li"); // Create an li element
rubyElement.id = "ruby"; // Set the id attribute to "ruby"
rubyElement.textContent = "Ruby"; // Set the text content to "Ruby"

document.getElementById("languages").appendChild(cElement); // Insert the new element into the DOM
document.getElementById("languages").appendChild(pythonElement); // Insert the new element into the DOM
document.getElementById("languages").appendChild(rubyElement); // Insert the new element into the DOM

document.getElementById(`languages`).insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>'); // Add an element to beginning of the list. 


document.getElementById(`languages`).insertAdjacentHTML("afterEnd", '<p id="java">Here is a more complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages.</p>'); // Add an element to end of the list.

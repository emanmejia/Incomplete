const pythonElement = document.createElement("li"); // Create an "li" element
pythonElement.id = "python";          // Define element ID
pythonElement.textContent = "Python"; // Define its text content
document.getElementById("languages").appendChild(pythonElement); // Insert the new element into the DOM

const sqlElement = document.createElement("li");
sqlElement.id = "sql";
sqlElement.textContent = "SQL";
document.getElementById("languages").appendChild(sqlElement); // Insert the new element into the DOM

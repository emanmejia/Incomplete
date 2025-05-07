// Variations on adding elements

const rubyElement = document.createElement("li");
rubyElement.id = "ruby";
rubyElement.appendChild(document.createTextNode("Ruby"));
document.getElementById("languages").appendChild(rubyElement); // Insert the new element into the DOM
// Adding a node before another one

const perlElement = document.createElement("li"); // Create an "li" element
perlElement.id = "perl";
perlElement.textContent = "Perl"; // Set the text content to "Perl"
document.getElementById("languages").insertBefore(perlElement, document.getElementById("php")); // Insert the new element before the "PHP" element in the DOM

document.getElementById(`languages`).insertAdjacentHTML("afterBEgin", '<li id="javascript">JavaScript</li>'); // Add an element to beginning of the list. 
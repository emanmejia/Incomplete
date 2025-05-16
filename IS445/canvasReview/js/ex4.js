// Method 1 - innerHTML
const paraElement = document.createElement("p");
paraElement.innerHTML = 'Here is a more complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages.' 
// Used single quote since I wanted to use double quote in the href=""

// Add the paragraph to the page
//  We'll add it to the end of the body.
document.body.appendChild(paraElement);

// Method 2 - Create elements, assign properties, then add
const paraElement2 = document.createElement("p");
const linkElement = document.createElement("a");

// Assign properties
linkElement.href = "https://en.wikipedia.org/wiki/List_of_programming_languages";
linkElement.textContent = "list";

// Build the paragraph
paraElement2.textContent = "Here is a more complete ";
paraElement2.appendChild(linkElement);

// Option 1 - Let's use textNode (can also use innerHtml)
paraElement2.appendChild(document.createTextNode(" of languages."));
// Option 2, use innerHtml
//paraElement2.innerHTML += " of languages."
// Can we use textContent instead of innerHTML?
// Try it:
//paraElement2.textContent += " of languages."
// Note: you lose the HTML tag for the link.  So, the hyperlink is lost



// Add to the end of the body
document.body.appendChild(paraElement2);
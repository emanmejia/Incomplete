// Newspaper list
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com", "http://www.lbpost.com"];

// Pseudocode
// Loop
//   Create link element
//   Set properties (href and textContent)
//   Add to div

// Get the div element
//   Can also do this in the loop but since we'll use it multiple times
//   Let's get it once outside the loop

const divElement = document.getElementById("content");

// Loop
newspapers.forEach(paper => {
  // Link element
  const linkElement = document.createElement("a");
  // Set properties
  linkElement.href = paper;
  linkElement.textContent = paper;
  // After executing, noticed that we need a break
  //  We'll add a <br>
  // Add/append to the div
  divElement.appendChild(linkElement);
  // After executing, noticed that we need a break
  //  We'll add a <br>
  //  We'll do it in one step
  divElement.appendChild(document.createElement("br"));
  // Can also use innerHTML
  //divElement.innerHTML += "<br>";
})

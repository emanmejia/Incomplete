const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

// Get the container div
const contentDiv = document.getElementById("content");

// Create a <dl> element
const dl = document.createElement("dl");

// Loop through the words array
words.forEach(word => {
  const dt = document.createElement("dt");
  const strong = document.createElement("strong");
  strong.textContent = word.term;
  dt.appendChild(strong);

  const dd = document.createElement("dd");
  dd.textContent = word.definition;

  dl.appendChild(dt);
  dl.appendChild(dd);
});

// Append the <dl> to the container
contentDiv.appendChild(dl);

const newspapers = [
  "https://www.nytimes.com",
  "https://www.washingtonpost.com", 
  "https://www.lbpost.com",
  "https://www.bloomberg.com",
  "https://www.reuters.com",
  "https://www.theguardian.com",
]

// Get the container div
const contentDiv = document.getElementById("content");

// Create a <ul> element
const list = document.createElement("ul");

// Create clickable links as list items
newspapers.forEach(url => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.textContent = url;
  a.target = "_blank";
  li.appendChild(a);
  list.appendChild(li);
});

// Add the list to the page
contentDiv.appendChild(list);
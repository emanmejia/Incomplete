// Get a reference to the 'links' unordered list.
const linksList = document.getElementById('links');

// Create a new list item (<li>) element.
const newListItem = document.createElement('li');
const cobLink = document.createElement('a');

cobLink.href = 'https://www.csulb.edu/college-of-business'; // Correct URL
cobLink.textContent = 'CSULB College of Business'; // Correct text


newListItem.appendChild(cobLink);
const isListItem = document.getElementById('is');
linksList.insertBefore(newListItem, isListItem);
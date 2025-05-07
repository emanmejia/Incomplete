// Had to use the internet for help here, conceptually CSS and HTML made complete sense, but the implementation / appending of the Height/Width took me a while to figure out. 

document.addEventListener('DOMContentLoaded', function() {
  const contentElement = document.getElementById('content');
  const infosElement = document.getElementById('infos');

  if (contentElement && infosElement) {
    const height = contentElement.offsetHeight;
    const width = contentElement.offsetWidth;

    // Create the title element
    const titleElement = document.createElement('h3');
    titleElement.textContent = 'Information about the element';

    // Create the unordered list
    const infoList = document.createElement('ul');
    const heightItem = document.createElement('li');
    const widthItem = document.createElement('li');

    heightItem.textContent = `Height: ${height}px`;
    widthItem.textContent = `Width: ${width}px`;

    infoList.appendChild(heightItem);
    infoList.appendChild(widthItem);

    // Append the title and then the list to the infosElement
    infosElement.appendChild(titleElement);
    infosElement.appendChild(infoList);

  } else {
    console.error('One or both of the elements with IDs "content" or "infos" were not found.');
  }
});
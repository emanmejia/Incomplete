/*
const paragraphElement = document.querySelectorAll('p');
paragraphElement.style.color = 'blue';
paragraphElement.style.fontStyle = 'bold'
paragraphElement.style.backgroundColor = 'yellow';
*/

const paragraphElements = document.querySelectorAll('p');

const backgroundColor = prompt("Enter your desired background color:");
const textColor = prompt("Enter your desired text color:");

paragraphElements.forEach(element => {
  if (backgroundColor) {
    element.style.backgroundColor = backgroundColor;
  }
  if (textColor) {
    element.style.color = textColor;
  }
  element.style.fontSize = '20px';
  element.style.fontWeight = 'bold';
  element.style.fontFamily = 'Arial';
});
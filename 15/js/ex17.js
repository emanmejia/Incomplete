const paragraphElements = document.querySelectorAll('div');

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
  element.style.fontFamily = 'Arial';
});
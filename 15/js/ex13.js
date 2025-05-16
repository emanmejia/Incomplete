const paragraphElement = document.querySelector('p');
paragraphElement.style.color = 'red';
paragraphElement.style.fontSize = '50px';
paragraphElement.style.fontFamily = 'Arial';
paragraphElement.style.backgroundColor = 'black';


const paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements[0].style.color); // "red"
console.log(paragraphElements[1].style.color); // "green"
console.log(paragraphElements[2].style.color); // Show an empty string, this is because Blue was pulled from the CSS sheet and not set in the style attribute.


const paragraphStyle = getComputedStyle(document.getElementById("para"));
console.log(paragraphStyle.color); // "rgb(0, 0, 255)" // Color blue from CSS sheet
console.log(paragraphStyle.fontStyle); // "italic"
console.log(paragraphStyle.fontSize); // "50px"
// Modifying an HTML element: adding an <li>

// this adds to additional elements to 'languages id, and that will be C and Python

document.getElementById("languages").innerHTML += '<li id="c">C</li>'; // adds C to the list
document.getElementById("languages").innerHTML += '<li id="c">Python</li>'; // adds Python to the list

// Delete the HTML content of the list, replacing it with nothing.


// Commenting out below, but this will clear your list.  Remove comment and test as needed.

/*
document.getElementById("languages").innerHTML = "";
*/
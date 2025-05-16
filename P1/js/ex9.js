// Code that helps people decide what to wear based on weather using if / else.  This is a Multiple Choice option. 


/* -- Commenting this out because we will do it below with a switch statement. --

const weather = prompt("What's the weather like?");
if (weather === "sunny") {
  console.log("T-shirt time!");
} else if (weather === "windy") {
  console.log("Windbreak life.");
} else if (weather === "rainy") {
  console.log("Bring the umbrella!");
} else if (weather === "snowy") {
  console.log("Just stay inside!");
} else {
  console.log("Not a valid weather type");
}

*/


// When a program should trigger a block from several operations depending on the value of an expression, you can write it using the JavaScript switch to do the same thing. 
// The switch statement kicks off the execution of one code block among many. Only the code block that matches the relevant situation will be executed. 

const weather2 = prompt("What's the weather like?");
switch (weather2) {
  case "sunny":
    console.log("T-shirt time!");
    break;
  case "windy":
    console.log("Windbreaker life.");
    break;
  case "rainy":
    console.log("Bring that umbrella!");
    break;
  case "snowy":
    console.log("Winter is coming! Just stay inside!");
    break;
  default:
    console.log("Not a valid weather type");
}

const x = "abc";
switch (x) {
  case "abc":
    console.log("x = abc");
  // break ommited: the next block is also run!
  case "def":
    console.log("x = def");
    break;
}
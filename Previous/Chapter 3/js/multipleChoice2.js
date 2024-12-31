// Let's write some code that helps people decide what to wear based on the weather using if/else.
const weather = prompt("What's the weather like?");
switch (weather) {
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
        console.log("Not a valid weather type.");
}

/*
switch (expression) {
  case value1:
    // Code to run when the expression matches value1
    break;
  case value2:
    // Code to run when the expression matches value2
    break;
  // ...
  default:
  // Code to run when neither case matches
}


const x = "abc";
switch (x) {
  case "abc":
    console.log("x = abc");
  // break omitted: the next block is also run!
  case "def":
    console.log("x = def");
    break;
}
    
*/
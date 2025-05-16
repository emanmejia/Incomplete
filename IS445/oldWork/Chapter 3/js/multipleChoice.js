// Let's write some code that helps people decide what to wear based on the weather using if/else.
const weather = prompt("What's the weather like?");
if (weather === "sunny") {
    console.log("T-shirt time!");
} else if (weather === "windy") {
    console.log("Windbreaker life.");
} else if (weather === "rainy") {
    console.log("Bring that umbrella!");
} else if (weather === "snowy") {
    console.log("Just stay inside!");
} else {
    console.log("Not a valid weather type");
}
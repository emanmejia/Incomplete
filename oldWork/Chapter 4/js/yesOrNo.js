// Game loop that continues asking for input until "yes" or "no" is typed out;

let answer;
do {
  answer = prompt(`Please type "yes" or "no" to end the game.`);
} while (answer !== "yes" && answer !== "no");

console.log(`You typed: ${answer}`);
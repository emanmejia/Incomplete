// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
const weather = prompt("What day of the week is it?");
switch (weather) {
    case "Monday":
        console.log("Tomorrow is Tuesday.");
        break;
    case "Tuesday":
        console.log("Tomorrow is Wednesday.");
        break;
    case "Wednesday":
        console.log("Tomorrow is Thursday.");
        break;
    case "Thursday":
        console.log("Tomorrow is Friday.");
        break;
    case "Friday":
        console.log("Tomorrow is Saturday.");
        break;
    case "Saturday":
        console.log("Tomorrow is Sunday.");
        break;
    case "Sunday":
        console.log("Tomorrow is Monday.");
        break;
    default:
        console.log("That is NOT a day of the week...");
}
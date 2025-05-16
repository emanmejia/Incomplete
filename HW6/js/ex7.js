// js/ex7.js

const contentDiv = document.getElementById('content');

function displaySum(num1, num2, sum) {
    contentDiv.innerHTML = `<p>The sum of ${num1} and ${num2} is <span style="color: red; font-weight: bold;">${sum}</span></p>`;
}

function displayNonIntegerError(input1, input2) {
    contentDiv.innerHTML = `<p style="color: red; font-weight: bold;">Error! You must enter integers. You entered "${input1}" and "${input2}". Try again.</p>`;
}

function getAndSumIntegers() {
    const input1 = prompt("Enter the first integer:");
    const input2 = prompt("Enter the second integer:");

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        const sum = num1 + num2;
        displaySum(num1, num2, sum);
    } else {
        displayNonIntegerError(input1, input2);
    }
}

getAndSumIntegers();
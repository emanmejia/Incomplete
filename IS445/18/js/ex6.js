const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
let intervalId;
let seconds = 0;
let isRunning = false;

function updateTimer() {
    seconds++;
    timerDisplay.textContent = `${seconds} seconds`;
}

function startChronometer() {
    if (!isRunning) {
        intervalId = setInterval(updateTimer, 1000);
        startButton.textContent = 'Stop';
        isRunning = true;
    } else {
        clearInterval(intervalId);
        startButton.textContent = 'Start';
        isRunning = false;
    }
}

startButton.addEventListener('click', startChronometer);
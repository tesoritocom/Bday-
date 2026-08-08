const minimizeBtn = document.getElementById("minimizeBtn");
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");

const choiceButtons = document.querySelectorAll(".choices button");

const clickSound = new Audio("./audio/click.wav");

minimizeBtn.addEventListener("click", () => {
    clickSound.currentTime = 0; // Reset the audio to the beginning
    clickSound.play();
    window.electronAPI.minimize();
});

closeBtn.addEventListener("click", () => {
    clickSound.currentTime = 0; // Reset the audio to the beginning
    clickSound.play();
    window.electronAPI.close();
});

backBtn.addEventListener("click", () => {
    clickSound.currentTime = 0; // Reset the audio to the beginning
    clickSound.play();

    setTimeout(() => {
        window.location.href = "study.html";
    }, 300); // Delay navigation by 300 milliseconds to allow the sound to play
});

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clickSound.currentTime = 0; // Reset the audio to the beginning
        clickSound.play();

        const targetPage = button.getAttribute("data-page");

        setTimeout(() => {
            window.location.href = targetPage;
        }, 300); // Delay navigation by 300 milliseconds to allow the sound to play
    });
});

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500; // 25 minutes in seconds
let interval; //variable that gets updated

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
};

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft <= 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500; // Reset to 25 minutes
            updateTimer();
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
};

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
};

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

const minimizeBtn = document.getElementById("minimizeBtn");
const closeBtn = document.getElementById("closeBtn");

minimizeBtn.addEventListener("click", () => {
    window.electronAPI.minimize();
});

closeBtn.addEventListener("click", () => {
    window.electronAPI.close();
});


// Add click sound effect to the buttons
const clickSound = new Audio("./audio/click.wav");
function playClickSound() {
    clickSound.currentTime = 0; // Reset the audio to the beginning
    clickSound.play();
}

minimizeBtn.addEventListener("click", playClickSound);
closeBtn.addEventListener("click", playClickSound);

const startBtn = document.getElementById("startBtn");
const startSound = new Audio("./audio/start.wav");

startBtn.addEventListener("click", () => {
    startSound.currentTime = 0; // Reset the audio to the beginning
    startSound.play();

    startSound.onended = () => {
        window.location.href = "choices.html";
    };
});

const yuujiImg = document.getElementById("Yuuji");
const graceImg = document.getElementById("Grace");

function animateSprite(img, frame1, frame2, interval = 500) {
    let currentFrame = true;

    setInterval(() => {
        img.src = currentFrame ? frame1 : frame2;
        currentFrame = !currentFrame;
    }, interval);
}

animateSprite(yuujiImg, "./assets/Yuuji 1.png", "./assets/Yuuji 2.png");
animateSprite(graceImg, "./assets/Grace 1.png", "./assets/Grace 2.png");


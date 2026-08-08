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
        window.location.href = "index.html";
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

const choice1Img = document.querySelector("#choice1 img");
const choice2Img = document.querySelector("#choice2 img");
const choice3Img = document.querySelector("#choice3 img");
const typingText = document.querySelector(".text");

function animateSprite(img, frame1, frame2, interval = 500) {
    let currentFrame = true;

    setInterval(() => {
        img.src = currentFrame ? frame1 : frame2;
        currentFrame = !currentFrame;
    }, interval);
}

function typeWriter(element, text, index = 0) {
    if (!element) return;

    element.textContent = text.slice(0, index);

    if (index < text.length) {
        setTimeout(() => typeWriter(element, text, index + 1), 70);
    }
}

animateSprite(choice1Img, "./assets/Twenty Five.png", "./assets/Twenty Five 2.png");
animateSprite(choice2Img, "./assets/Forty five.png", "./assets/Forty five 2.png");
animateSprite(choice3Img, "./assets/Hour.png", "./assets/Hour 2.png");

typeWriter(typingText, "Choose a dish!");

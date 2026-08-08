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

animateSprite(choice1Img, "./assets/Choice11.png", "./assets/Choice12.png");
animateSprite(choice2Img, "./assets/Choice21.png", "./assets/Choice22.png");
animateSprite(choice3Img, "./assets/Choice31.png", "./assets/Choice32.png");

typeWriter(typingText, "What would you like to do today?");

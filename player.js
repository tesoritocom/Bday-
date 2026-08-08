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
        window.location.href = "choices.html";
    }, 300); // Delay navigation by 300 milliseconds to allow the sound to play
});

const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const songSlider = document.getElementById("slider-song");

const playPauseButton = document.getElementById("play");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs = [
    {
        image:"./album/Punisher.png",
        name:"i know the end.",
        artist:"Phoebe Bridgers",
        audio:"./songs/I Know The End.mp3",
        album:"Punisher"
    },
    {
        image:"./album/Stranger In The Alps.jpg",
        name:"funeral.",
        artist:"Phoebe Bridgers",
        audio:"./songs/Funeral.mp3",
        album:"Stranger In The Alps"
    },
    {
        image:"./album/Punisher.png",
        name:"chinese satellite.",
        artist:"Phoebe Bridgers",
        audio:"./songs/Chinese Satellite.mp3",
        album:"Punisher"
    },
    {
        image:"./album/CHROMAKOPIA.jpg",
        name:"judge judy.",
        artist:"Tyler, The Creator",
        audio:"./songs/Judge Judy.mp3",
        album:"CHROMAKOPIA"
    },
    {
        image:"./album/Bright Future.jpg",
        name:"free treasure.",
        artist:"Adrianne Lenker",
        audio:"./songs/Free Treasure.mp3",
        album:"Bright Future"
    },
     {
        image:"./album/La La Land.jpg",
        name:"a lovely night.",
        artist:"La La Land Cast",
        audio:"./songs/A Lovely Night.mp3",
        album:"La La Land"
    },
    {
        image:"./album/Race.jpg",
        name:"gnaw.",
        artist:"Alex G",
        audio:"./songs/Gnaw.mp3",
        album:"Race"
    },
    {
        image:"./album/Hamilton.jpg",
        name:"the room where it happens.",
        artist:"Hamilton",
        audio:"./songs/The Room Where It Happens.mp3",
        album:"Hamilton"
    },
    {
        image:"./album/Humanz.jpg",
        name:"she's my collar.",
        artist:"Gorillaz",
        audio:"./songs/She's My Collar.mp3",
        album:"Humanz"
    },
    {
        image:"./album/Cinema.jpg",
        name:"heavy.",
        artist:"The Marias",
        audio:"./songs/Heavy.mp3",
        album:"Cinema"
    },
    {
        image:"./album/Fake Plastic Trees.jpg",
        name:"fake plastic trees.",
        artist:"Radiohead",
        audio:"./songs/Fake Plastic Trees.mp3",
        album:"Fake Plastic Trees"
    },
    {
        image:"./album/The Great Divide.jpg",
        name:"haircut.",
        artist:"Noah Kahan",
        audio:"./songs/Haircut.mp3",
        album:"The Great Divide"
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;

function updatePlayButtonIcon() {
    playPauseButton.textContent = audio.paused ? "▶" : "⏸";
    playPauseButton.setAttribute("aria-label", audio.paused ? "Play" : "Pause");
}

updateSong();
updatePlayButtonIcon();

prevSongButton.addEventListener("click", function() {
    if (currentSongIndex == 0) {
        return;
    }
    currentSongIndex--;
    updateSong();
})

nextSongButton.addEventListener("click", function() {
    if (currentSongIndex == songs.length - 1) {
        return;
    }
    currentSongIndex++;
    updateSong();
});

playPauseButton.addEventListener("click", function() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
    updatePlayButtonIcon();
});

audio.addEventListener("play", updatePlayButtonIcon);
audio.addEventListener("pause", updatePlayButtonIcon);
audio.addEventListener("ended", updatePlayButtonIcon);

function updateSong() {
    const song = songs[currentSongIndex];
    songImage.src = song.image;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

    audio.src = song.audio;
    audio.onloadedmetadata = function() {
        songSlider.value = 0;
        songSlider.max = audio.duration;
    }
}

songSlider.addEventListener("change", function() {
    audio.currentTime = songSlider.value;
});

function moveSlider() {
    songSlider.value = audio.currentTime;
};

setInterval(moveSlider, 1000);
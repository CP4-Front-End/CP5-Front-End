// Navbar scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("backdrop-blur-lg");
  } else {
    navbar.classList.remove("backdrop-blur-lg");
  }
});

// Player
const playBtn = document.getElementById("play");
const playIcon = document.getElementById("playIcon");

const likeBtn = document.getElementById("like");
const likeIcon = document.getElementById("likeIcon");

let isPlaying = false;
let isLiked = false;

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
});

// LIKE
likeBtn.addEventListener("click", () => {
  isLiked = !isLiked;

  if (isLiked) {
    likeIcon.classList.remove("fa-regular");
    likeIcon.classList.add("fa-solid", "text-red-500");
  } else {
    likeIcon.classList.remove("fa-solid", "text-red-500");
    likeIcon.classList.add("fa-regular");
  }
});

const player = document.getElementById("player");
const buttons = document.querySelectorAll(".openPlayer");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    player.classList.remove("translate-y-full");
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  });
});

const audio = document.getElementById("audioPlayer");

// Banco de dados das músicas
const musics = [
  "../src/audio/Amiri.mp3",
  "../src/audio/TODASASLUZES.mp3",
  "../src/audio/ESQV.mp3",
  "../src/audio/DBN.mp3"
];

let currentIndex = 0;

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {

    currentIndex = index;

    const music = btn.getAttribute("data-src");

    audio.src = music;
    audio.play();

    player.classList.remove("translate-y-full");

    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  });
});



const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= musics.length) {
    currentIndex = 0; // volta pro início
  }

  audio.src = musics[currentIndex];
  audio.play();

  playIcon.classList.replace("fa-play", "fa-pause");
});

const prevBtn = document.getElementById("prev");

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = musics.length - 1; // vai pro final
  }

  audio.src = musics[currentIndex];
  audio.play();

  playIcon.classList.replace("fa-play", "fa-pause");
});
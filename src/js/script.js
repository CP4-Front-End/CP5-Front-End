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

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
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

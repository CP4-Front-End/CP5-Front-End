// Pega o elemento no HTML
const navbar = document.getElementById("navbar");

//Toda vez que scrollar o script escuta
window.addEventListener("scroll", () => {
  //Quando rolar mais de 50px pra baixo deixa com blur
  if (window.scrollY > 50) {
    navbar.classList.add("backdrop-blur-lg");
  } else {
    //Senão volta ao normal
    navbar.classList.remove("backdrop-blur-lg");
  }
});

// Pegando os elementos do HTML
const playBtn = document.getElementById("play");
const playIcon = document.getElementById("playIcon");
const likeBtn = document.getElementById("like");
const likeIcon = document.getElementById("likeIcon");

//Estados do sistema
let isPlaying = false; //Música tocando
let isLiked = false; //Música curtida


//Lógica do botão player
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    //Se o audio está tocando troca o icone para pausar
    audio.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    //Senão troca o icone para tocar
    audio.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
});

// LIKE
likeBtn.addEventListener("click", () => {
  isLiked = !isLiked; //Toggle inverte o valor do buleano

  if (isLiked) {
    likeIcon.classList.remove("fa-regular");
    likeIcon.classList.add("fa-solid", "text-red-500");
  } else {
    likeIcon.classList.remove("fa-solid", "text-red-500");
    likeIcon.classList.add("fa-regular");
  }
});

//Pega os elementos do HTML
const player = document.getElementById("player");
const buttons = document.querySelectorAll(".openPlayer");

//Faz um ciclo para cada botão
buttons.forEach(btn => {
  //Evento click em cada um
  btn.addEventListener("click", () => {
    //Faz o player aparecer 
    player.classList.remove("translate-y-full");
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  });
});

//Pega o elemento que ta tocando a música do HTML
const audio = document.getElementById("audioPlayer");

// Banco de dados das músicas
const musics = [
  "/CP5-Front-End/src/audio/Amiri.mp3",
  "/CP5-Front-End/src/audio/TODASASLUZES.mp3",
  "/CP5-Front-End/src/audio/ESQV.mp3",
  "/CP5-Front-End/src/audio/DBN.mp3"
];
const nomes =[
  ['Amiri', 'Yunk Vino, Veigh'],
  ['TODAS AS LUZES', 'Matuê'],
  ['ESQV', 'Ryu, The Runner'],
  ['D.B.N', 'Dudu']
];


let currentIndex = 0;

//Pega os elementos de texto no HTML
const musicName = document.getElementById("musicName");
const artistName = document.getElementById("artistName");

//For para cada botão
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    
    //Recebe a posição para saber qual música está tocando 
    currentIndex = index;


    //Pega o caminho da música no HTML
    const music = btn.getAttribute("data-src");

    //Faz tocar
    audio.src = music;
    audio.play();

    //Sobe o a barra e atualiza o icone 
    player.classList.remove("translate-y-full");
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");

    //Para trocar o texto 
    musicName.textContent = nomes[index][0];
    artistName.textContent = nomes[index][1];
  });
});


//Pega o botão de próxima música
const nextBtn = document.getElementById("next");

//Evento de click
nextBtn.addEventListener("click", () => {

  //Passa para a próxima música
  currentIndex++;

  //Se o index for maior ou igual ao len do array volta o index a zero, recomeça
  if (currentIndex >= musics.length) {
    currentIndex = 0; // volta pro início
  }

  //Toca a música
  audio.src = musics[currentIndex];
  audio.play();

  playIcon.classList.replace("fa-play", "fa-pause");
});

//Pega o botão voltar em HTML
const prevBtn = document.getElementById("prev");

//Evento click
prevBtn.addEventListener("click", () => {
  //Tira um do index
  currentIndex--;

  //Se o index for menor que zero, vai pro final do array
  if (currentIndex < 0) {
    currentIndex = musics.length - 1; // vai pro final
  }

  //Toca a música
  audio.src = musics[currentIndex];
  audio.play();

  playIcon.classList.replace("fa-play", "fa-pause");
});
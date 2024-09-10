const video = document.querySelector('#video');
const playButton = document.querySelector(".fa");
const contour = document.querySelector('.contour');
const backButton = document.querySelector(".fa1");
const foButton = document.querySelector(".fa2");

// Fonctions de gestion de la vidéo
function playVideo() {
  video.play();
  playButton.classList.remove('fa-play');
  playButton.classList.add('fa-pause');
}

function pauseVideo() {
  video.pause();
  playButton.classList.remove('fa-pause');
  playButton.classList.add('fa-play');
}

function rewindVideo() {
  video.currentTime -= 5;
}

function forwardVideo() {
  video.currentTime += 5;
}

// Gestion des événements
playButton.addEventListener("click", function() {
  if (video.paused) {
    playVideo();
    showButtons(false);
  } else {
    pauseVideo();
    showButtons(true);
  }
});

backButton.addEventListener('click', rewindVideo);
foButton.addEventListener('click', forwardVideo);

// Fonction pour afficher/masquer les boutons
function showButtons(show) {
  if (show) {
    playButton.classList.remove('show');
    contour.classList.remove('show');
    backButton.classList.add('show');
    foButton.classList.add('show');
  } else {
    playButton.classList.add('hidden');
    contour.classList.add('hidden');
    backButton.classList.add('hidden');
    foButton.classList.add('hidden');
  }
}

// Ajout des événements mouseover et mouseout
contour.addEventListener('mouseover', function() {
  showButtons(true);
});

contour.addEventListener('mouseout', function() {
  if (video.paused) {
    showButtons(false);
  }
});
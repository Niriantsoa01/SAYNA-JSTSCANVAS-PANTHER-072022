document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (path.includes('/Accueil/')) {
      document.getElementById('nav-accueil').classList.add('active');
    } else if (path.includes('/wakanda/')) {
      document.getElementById('nav-wakanda').classList.add('active');
    } else if (path.includes('/Enigme/')) {
      document.getElementById('nav-enigme').classList.add('active');
    }
  });


const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const targetId = anchor.getAttribute('href').split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
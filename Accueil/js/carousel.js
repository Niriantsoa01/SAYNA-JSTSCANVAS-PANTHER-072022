const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const items = carouselInner.querySelectorAll('.carousel-item');
const nextButton = carousel.querySelector('.next');
const itemWidth = items[0].offsetWidth;
let currentIndex = 0;

const duplicatedItems = Array.from(items).map((item) => item.cloneNode(true));
carouselInner.append(...duplicatedItems);

nextButton.addEventListener('click', () => {
    // Incrémenter l'index actuel
    currentIndex = (currentIndex + 1) % items.length;

    items[(currentIndex - 1 + items.length) % items.length].classList.remove('hidden');

    // Calculer la translation à appliquer au conteneur
    const translateXValue = -currentIndex * itemWidth;
    carouselInner.style.transform = `translateX(${translateXValue}px)`;

    // Vérifier si l'élément suivant est celui avec la classe "hidden"
    if (items[currentIndex].classList.contains('hidden')) {
        items[currentIndex].classList.remove('hidden');
    }

     // Si on est à la fin du carousel, revenir au début
  if (currentIndex === items.length - 1) {
    carouselInner.style.transform = `translateX(0px)`;
    currentIndex = 0;
    }; 
});

// Ajoutez un événement de scroll à la fenêtre
window.addEventListener('scroll', () => {
    // Parcourez les éléments carousel-item
    items.forEach((item) => {
        item[0].classList.add('first-position');
      // Vérifiez si l'élément est à la position de la classe first-position
      if (item.classList.contains('first-position')) {
        console.log(item);

        // Ajoutez un effet de zoom à l'image
        item.style.transform = 'scale(1.2)';
      } else {
        // Retirez l'effet de zoom si l'élément n'est plus à la position first-position
        item.style.transform = 'scale(1)';
      }
    });
  });

/*
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
  

const handleIntersect = function (entries,observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll("[class*='reveal-']").forEach(function (r) {
    observer.observe(r)
})

*/

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
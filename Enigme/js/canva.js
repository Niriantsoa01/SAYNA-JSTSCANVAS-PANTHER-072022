let canvas = document.getElementById('canva');
let ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


window.addEventListener('resize', resizeCanvas); // Ajuste la taille du canvas lorsque la fenêtre est redimensionnée
resizeCanvas();


let x = canvas.width / 2 ; 
let y = canvas.height / 2;
let img = new Image();
img.src = 'image/Pantherenigme3.png';

canvas.addEventListener('mousemove', function(e) {
    x = e.clientX;
    y = e.clientY;
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(x, y); // déplayce le centre de rotation au centre de l'imag
    ctx.drawImage(img, -25, -25, 50, 50); // dessine l'image avec les coordonnées ajustées
    ctx.restore();

    requestAnimationFrame(draw);
}


draw();
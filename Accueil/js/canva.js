let canvas = document.getElementById('canva');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width; 
let y = canvas.height;

let img = new Image();
img.src = 'image/Pantherenigme3.png';

canvas.addEventListener('mousemove', function(e) {
    x = e.clientX - 12;
    y = e.clientY + 70;
});


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(x,y); // xdéplayce le centre de rotation au centre de l'imag
    ctx.drawImage(img, -25, -25, 50, 50); // dessine l'image avec les coordonnées ajustées
    ctx.restore();
    
    requestAnimationFrame(draw);
    

}


draw();
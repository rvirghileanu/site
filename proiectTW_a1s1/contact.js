
function deseneazaPeCanvas() {
    const canvas = document.getElementById('contactCanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#d291bc';

    ctx.beginPath();
    ctx.arc(250, 150, 100, 0, 2 * Math.PI); 
    ctx.fill();
}

// functie pentru a anima svg-ul
function animeazaSVG() {
    const svg = document.getElementById('contactSVG');
    const circle = svg.querySelector('circle');

    let angle = 0;
    setInterval(() => {
        angle += 2; // Modifică unghiul
        const x = 250 + Math.sin(angle * Math.PI / 180) * 100;
        const y = 150 + Math.cos(angle * Math.PI / 180) * 100;
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
    }, 20); 
}

// apelez funcțiile de desenare la încărcarea paginii
window.onload = function () {
    deseneazaPeCanvas();

    animeazaSVG();

    //schimb aleatoriu culorile de fundal in sectiunea contact
    const contactSections = document.querySelectorAll(".contact section");
    const colors = ["#5A0017", "#301934", "#d291bc", "#c2b5a8"];

    contactSections.forEach((section) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        section.style.backgroundColor = randomColor;
    });
};

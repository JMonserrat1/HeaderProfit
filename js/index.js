//Cambia el menu por la x
function menuX() {
    var imagen = document.getElementById("imagen");
    if (imagen.src.match("/assets/x.png")) {
        imagen.src = "/assets/desplegable.png"; // Cambia a la imagen desplegable
    } else {
        imagen.src = "/assets/x.png"; // Cambia a la imagen de la X
    }
}


//SLIDER 
let slideIndex = 0;
const slides = document.querySelectorAll('.Servicios .slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    slideIndex += n;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

showSlides();


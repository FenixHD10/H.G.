// Selección de elementos
const slides = document.querySelector(".carrusel-slides");
const totalSlides = document.querySelectorAll(".slide").length;

let currentIndex = 0;

// Función para cambiar de imagen
function cambiarSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Reiniciar al primer slide
    }
    // Mover las slides con transform
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambiar de slide cada 3 segundos  setInterval(cambiarSlide, 3000);
setInterval(cambiarSlide,5000);

// Elementos del DOM
const toggleButton = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

//Botón de menú
toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});


// Elementos del DOM
const toggleButton = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

//Botón de menú
toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los enlaces del menú
    const links = document.querySelectorAll(".sidebar a");

    // Seleccionar todas las secciones
    const sections = document.querySelectorAll("section");

    // Función para cambiar de sección
    function cambiarSeccion(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Obtener la sección asociada al enlace
        const sectionId = event.target.getAttribute("data-section");

        // Ocultar todas las secciones
        sections.forEach((section) => {
            section.classList.remove("active");
        });

        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    }

    // Añadir evento click a todos los enlaces del menú
    links.forEach((link) => {
        link.addEventListener("click", cambiarSeccion);
    });
});


// Elementos del DOM
const toggleButton = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

//Botón de menú
toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

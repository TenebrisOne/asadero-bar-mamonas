// Actualizar el año en el footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Cambiar el color del navbar al hacer scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Animaciones al hacer scroll
document.addEventListener("scroll", function () {
    const elementos = document.querySelectorAll(".animate__animated");

    elementos.forEach((elemento) => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;

        if (posicion < alturaVentana) {
            elemento.style.visibility = "visible";
            elemento.classList.add(elemento.getAttribute("data-animacion"));
        }
    });
});

// Desplazamiento suave en el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Intersection Observer para animaciones
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const sections = document.querySelectorAll('.animate-on-scroll');
sections.forEach(section => observer.observe(section));

// Desplazamiento suave en el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

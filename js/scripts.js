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


    // Función para comprobar si el elemento está en la vista
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para agregar la animación cuando el elemento entra en la vista
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            if (isInViewport(el)) {
                el.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }

    // Escuchar el evento de scroll
    window.addEventListener('scroll', animateOnScroll);

    // Llamar a la función al cargar la página para animar los elementos visibles
    window.addEventListener('load', animateOnScroll);


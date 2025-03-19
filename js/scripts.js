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
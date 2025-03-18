// Actualizar el año en el footer
document.getElementById("current-year").textContent = new Date().getFullYear();

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
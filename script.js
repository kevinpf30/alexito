document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
    });
});
const burger = document.querySelector(".burger")
const navLinks = document.querySelector(".nav-links")
burger.addEventListener("click", () => {navLinks.classList.toggle("active")})

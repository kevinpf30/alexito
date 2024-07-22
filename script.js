document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
    });
});

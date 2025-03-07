// Animaciones y efectos interactivos
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de aparición suave al hacer scroll
    const elementos = document.querySelectorAll('.area-card, .equipo-card, .noticia-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elementos.forEach(element => {
        observer.observe(element);
    });
});
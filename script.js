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

<script>
    // Seleccionamos el video
    const video = document.querySelector('.video-background');

    // Intentamos reproducir el video
    if (video) {
        // La reproducción en navegadores modernos devuelve una "promesa"
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Autoplay fue bloqueado.
                // Aquí podríamos mostrar un botón de play o una imagen de fondo.
                console.error("La reproducción automática fue bloqueada:", error);
            });
        }
    }
</script>
</body>
</html>

// JavaScript para funcionalidad básica
document.addEventListener('DOMContentLoaded', function() {

    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    const totalCards = cards.length;






    const moveCarousel = (direction) => {
        if (direction === 'next') {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Vuelve al primer testimonio
            }
        } else if (direction === 'prev') {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalCards - 1; // Vuelve al último testimonio
            }
        }

        const offset = -currentIndex * 100; // Mueve el carrusel al siguiente testimonio
        track.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));





    // Configurar el botón de enviar
    document.getElementById('submitBtn').addEventListener('click', function(e) {
        e.preventDefault();

        if(!document.getElementById('terms').checked) {
            alert('Please accept the Terms & Conditions');
            return;
        }

        document.getElementById('thankYouMessage').style.display = 'flex';
        document.querySelector('.contact-us').reset();
    });

    // Configurar el botón de cerrar
    document.querySelector('.thank-you-close-btn').addEventListener('click', function() {
        document.getElementById('thankYouMessage').style.display = 'none';
    });







});
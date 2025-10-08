let currentSlide = 0;
let slides = [];
let totalSlides = 0;

function initPresentation() {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    document.getElementById('totalSlides').textContent = totalSlides;

    // Show first slide
    if (slides.length > 0) {
        showSlide(0);
    }
}

function showSlide(n) {
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');

    document.getElementById('currentSlide').textContent = currentSlide + 1;

    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        changeSlide(1);
    }
});

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPresentation);
} else {
    // DOM already loaded
    initPresentation();
}

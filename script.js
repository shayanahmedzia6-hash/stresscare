let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Initialize first slide
slides[0].classList.add('active');

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        removeActiveClass();
        currentSlide++;
        addActiveClass();
        updateDots();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        removeActiveClass();
        currentSlide--;
        addActiveClass();
        updateDots();
    }
}

function goToSlide(slideIndex) {
    removeActiveClass();
    currentSlide = slideIndex;
    addActiveClass();
    updateDots();
}

function removeActiveClass() {
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
}

function addActiveClass() {
    slides[currentSlide].classList.add('active');
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    
    const activeDots = document.querySelectorAll(`.slide-${currentSlide + 1} .dot.active`);
    activeDots.forEach(dot => dot.classList.add('active'));
}

function finishOnboarding() {
    // You can replace this with your actual navigation logic
    alert('Welcome to Stress Detection App! 🎉');
    console.log('Onboarding completed!');
    // In a real app, you would navigate to the dashboard or home page
    // window.location.href = '/dashboard.html';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - go to next slide
            nextSlide();
        } else {
            // Swiped right - go to previous slide
            prevSlide();
        }
    }
}

// Initial setup
console.log('Stress Detection Onboarding loaded successfully!');

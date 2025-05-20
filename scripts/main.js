const slides = document.querySelector('.slider-container');
const images = document.querySelectorAll('.slider-container img');

let currentIndex = 0;
const totalImages = images.length;

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    updateSlider();
    console.log(currentIndex);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
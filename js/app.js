// Slide container 
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 1;
const slideWidth = 100;
const totalSlides = images.length;

slides.style.transform = `translateX(-${slideWidth * index}%)`;

function nextSlide() {
    index++;
    slides.style.transition = 'transform 0.6s ease-in-out';
    slides.style.transform = `translateX(-${slideWidth * index}%)`;

    // chegou no clone do primeiro
    if (index === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            index = 1;
            slides.style.transform = `translateX(-${slideWidth * index}%)`;
        }, 600);
    }
}

setInterval(nextSlide, 3000);

// Ano
const ano = document.getElementById("ano");

ano.textContent= new Date().getFullYear()
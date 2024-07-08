// Slider 
let slideAtual = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideAtual = 0;
    } else if (index < 0) {
        slideAtual = slides.length - 1;
    } else {
        slideAtual = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === slideAtual) {
            slide.classList.add('active');
        }
    });
}

function mudarSlide(passo) {
    mostrarSlide(slideAtual + passo);
}

mostrarSlide(slideAtual);

setInterval(() => {
    mudarSlide(1);
}, 3000);

// Menu Lista Nóticia

document.querySelectorAll('.menu li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu li').forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(`.${item.dataset.target}`).classList.add('active');
    });
});

// carrosel sobre o filme

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const totalItems = carouselItems.length;
const itemWidth = carouselItems[0].clientWidth;

function slideNext() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}

function slidePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);


// menu lista diretor
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu-link');
    const contents = document.querySelectorAll('.content');

    links.forEach(link => {
        link.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');

            contents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(targetId).classList.add('active');
        });
    });
});
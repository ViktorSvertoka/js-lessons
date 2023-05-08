'use strict';

const slides = document.querySelectorAll('.slider-img');
const navBtns = document.querySelectorAll('.slider-nav-btn');
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= slides.length) {
    return;
  }

  slides[currentSlide].classList.remove('active');
  slides[slideIndex].classList.add('active');

  navBtns[currentSlide].classList.remove('active');
  navBtns[slideIndex].classList.add('active');

  currentSlide = slideIndex;
}

// При загрузке страницы добавляем класс active к первому слайду
slides[0].classList.add('active');

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener('click', function () {
    showSlide(i);
  });
}

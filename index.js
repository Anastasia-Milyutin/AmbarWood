const btnRight = document.querySelector('.slider-arrow-btn-right');
btnRight.addEventListener('click', moveRight);

const btnLeft = document.querySelector('.slider-arrow-btn-left');
btnLeft.addEventListener('click', moveLeft);

const dots = document.querySelectorAll('.slider__dots');

let activeIndex = 0;

function moveRight() {
  dots[activeIndex].classList.remove('slider__dots-active');
  activeIndex++;
  if (activeIndex === dots.length) {
    activeIndex = 0;
  }
  dots[activeIndex].classList.add('slider__dots-active');
}

function moveLeft() {
  dots[activeIndex].classList.remove('slider__dots-active');
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = dots.length - 1;
  }
  dots[activeIndex].classList.add('slider__dots-active');
}
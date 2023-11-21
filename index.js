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


let btnMobil = document.querySelector('.menu-icon')
let menuMobil = document.querySelector('.menu__mobil')
btnMobil.addEventListener('click', () => {
  if (menuMobil.style.display === "block") {
    menuMobil.style.display = "none";
  } else {
    menuMobil.style.display = "block";
  }
})

let btnCatalog = document.querySelector('.header__catalog')
let blockCatalog = document.querySelector('.catalog__menu-block')
btnCatalog.addEventListener('click', () => {
  if (blockCatalog.style.display === "block") {
    blockCatalog.style.display = "none";
  } else {
    blockCatalog.style.display = "block";
  }
}
)

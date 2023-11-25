const btnRight = document.querySelector('.work-arrow-btn-right');
btnRight.addEventListener('click', moveRight);

const btnLeft = document.querySelector('.work-arrow-btn-left');
btnLeft.addEventListener('click', moveLeft);

const dots = document.querySelectorAll('.btn-nomber');

let activeIndex = 0;

function moveRight() {
  dots[activeIndex].classList.remove('btn-nomber-active');
  activeIndex++;
  if (activeIndex === dots.length) {
    activeIndex = 0;
  }
  dots[activeIndex].classList.add('btn-nomber-active');
}

function moveLeft() {
  dots[activeIndex].classList.remove('btn-nomber-active');
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = dots.length - 1;
  }
  dots[activeIndex].classList.add('btn-nomber-active');
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

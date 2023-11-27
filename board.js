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


let btnMobil = document.querySelector('.menu-icon')
let menuMobil = document.querySelector('.menu__mobil')
btnMobil.addEventListener('click', () => {
  if (menuMobil.style.display === "block") {
    menuMobil.style.display = "none";
  } else {
    menuMobil.style.display = "block";
}
})

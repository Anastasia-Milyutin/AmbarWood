let btnCatalog = document.querySelector(".header__catalog");
let blockCatalog = document.querySelector(".catalog__menu-block");
btnCatalog.addEventListener("click", () => {
  if (blockCatalog.style.display === "block") {
    blockCatalog.style.display = "none";
  } else {
    blockCatalog.style.display = "block";
  }
});

let btnMapSpb = document.querySelector(".map-btn-spb");
let btnMapMoscol = document.querySelector(".map-btn");
let blockMoscol = document.querySelector(".block-maps-flex");
let btnActive = document.querySelector(".map-btn-active");
let blockSpb = document.querySelector(".block-maps-flex-Spb");
btnMapSpb.addEventListener("click", () => {
  blockSpb.style.display = "block";
  blockMoscol.style.display = "none";
  btnMapSpb.classList.add("map-btn-active");
  btnMapMoscol.classList.remove("map-btn-active");
});

btnMapMoscol.addEventListener("click", () => {
  blockSpb.style.display = "none";
  blockMoscol.style.display = "block";
  btnMapMoscol.classList.add("map-btn-active");
  btnMapSpb.classList.remove("map-btn-active");
});


let btnMobil = document.querySelector('.menu-icon')
let menuMobil = document.querySelector('.menu__mobil')
btnMobil.addEventListener('click', () => {
  if (menuMobil.style.display === "block") {
    menuMobil.style.display = "none";
  } else {
    menuMobil.style.display = "block";
}
})

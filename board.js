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
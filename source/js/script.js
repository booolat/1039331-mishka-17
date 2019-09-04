var button = document.querySelector(".page-header__menu-button");
var menu = document.querySelector(".main-nav");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--hide");
});
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  button.classList.toggle("page-header__menu-button--open");
});

var cart = document.querySelectorAll("a.goods-list__cart");
var size = document.querySelector(".modal");

for (var i = 0; i < cart.length; i++) {
cart[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  size.classList.add("modal-show");
});
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (size.classList.contains("modal-show")) {
      size.classList.remove("modal-show");
    }
  }
});

var link = document.querySelector(".week-deal__button");
var popup = document.querySelector(".modal");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

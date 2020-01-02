var popupLink = document.querySelector(".page-header__toggle");
var navPopup = document.querySelector(".form-header__nav");
var navClose = navPopup.querySelector(".page-header__close-menu");

navPopup.classList.add("modal-show");

popupLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  navPopup.classList.add("modal-open");
});

navClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  navPopup.classList.remove("modal-open");
});

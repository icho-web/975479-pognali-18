var popupLink = document.querySelector(".page-header__toggle");
var popupLinkGrey = document.querySelector(".page-header__toggle--grey");
var navPopup = document.querySelector(".page-header__nav");
var navClose = navPopup.querySelector(".page-header__close-menu");

navPopup.classList.add("modal-show");

popupLinkGrey.addEventListener("click", function (evt) {
  navPopup.classList.add("modal-open");
});

popupLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  navPopup.classList.add("modal-open");
});

navClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  navPopup.classList.remove("modal-open");
});

var tariffsLink = document.querySelector(".profile__button");
var tariffsPopup = document.querySelector(".tariffs-popup");
var tariffsClose = tariffsPopup.querySelector(".tariffs-popup__close");

tariffsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  tariffsPopup.classList.add("modal-open");
});

tariffsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  tariffsPopup.classList.remove("modal-open");
});

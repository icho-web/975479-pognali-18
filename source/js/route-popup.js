var routeLink = document.querySelector(".route__choose-link");
var routePopup = document.querySelector(".route__table-wrapper");
var routeClose = document.querySelector(".route__choose-close");

routeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  routePopup.classList.add("modal-open");
});

routeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  routePopup.classList.remove("modal-open");
});

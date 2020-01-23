var routeLink = document.querySelector(".route__choose-link");
var routePopup = document.querySelector(".route__table-wrapper");
var routeClose = document.querySelector(".route__choose-close");
var routeChoose = document.querySelector(".route__link-wrapper")

routeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  routeLink.classList.add("route__choose--blue");
  routeChoose.classList.add("route__link-close")
  routePopup.classList.add("route__open");
  routeClose.classList.add("route__open");
});

routeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  routeLink.classList.remove("route__choose--blue");
  routeChoose.classList.remove("route__link-close")
  routePopup.classList.remove("route__open");
  routeClose.classList.remove("route__open");
});

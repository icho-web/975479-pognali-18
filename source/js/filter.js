var hobbyLink = document.querySelector(".hobby__header-dropdown");
var hobbyHeader = document.querySelector(".hobby__header")
var hobbyPopup = document.querySelector(".hobby__list");
var musicLink = document.querySelector(".music__header-dropdown");
var musicHeader = document.querySelector(".music__header");
var musicPopup = document.querySelector(".music__list");
var foodLink = document.querySelector(".food__header-dropdown");
var foodHeader = document.querySelector(".food__header");
var foodPopup = document.querySelector(".food__list");
var transportLink = document.querySelector(".transport__header-dropdown");
var transportHeader = document.querySelector(".transport__header");
var transportPopup = document.querySelector(".transport__list");
var levelLink = document.querySelector(".level__header-dropdown");
var levelHeader = document.querySelector(".level__header");
var levelPopup = document.querySelector(".level__wrapper");
var transportItem = document.querySelectorAll(".transport__item");
var transportItemImg = document.querySelectorAll(".transport__item-img")

hobbyLink.addEventListener("click", function (evt) {
  hobbyPopup.classList.toggle("filter__open");
  hobbyLink.classList.toggle("dropdown__rotate");
});

hobbyHeader.addEventListener("click", function (evt) {
  hobbyPopup.classList.toggle("filter__open");
  hobbyLink.classList.toggle("dropdown__rotate");
});

musicLink.addEventListener("click", function (evt) {
  musicPopup.classList.toggle("filter__open");
  musicLink.classList.toggle("dropdown__rotate");
});

musicHeader.addEventListener("click", function (evt) {
  musicPopup.classList.toggle("filter__open");
  musicLink.classList.toggle("dropdown__rotate");
});

foodLink.addEventListener("click", function (evt) {
  foodPopup.classList.toggle("filter__open");
  foodLink.classList.toggle("dropdown__rotate");
});

foodHeader.addEventListener("click", function (evt) {
  foodPopup.classList.toggle("filter__open");
  foodLink.classList.toggle("dropdown__rotate");
});

transportLink.addEventListener("click", function (evt) {
  transportPopup.classList.toggle("filter__open");
  transportLink.classList.toggle("dropdown__rotate")
});

transportHeader.addEventListener("click", function (evt) {
  transportPopup.classList.toggle("filter__open");
  transportLink.classList.toggle("dropdown__rotate");
});

levelLink.addEventListener("click", function (evt) {
  levelPopup.classList.toggle("filter__open");
  levelLink.classList.toggle("dropdown__rotate");
});

levelHeader.addEventListener("click", function (evt) {
  levelPopup.classList.toggle("filter__open");
  levelLink.classList.toggle("dropdown__rotate");
});

for (var i = 0; i < transportItem.length; i++) {
  transportItem[i].addEventListener("click", function (evt) {
    this.classList.toggle("transport__item--active");
  });
};

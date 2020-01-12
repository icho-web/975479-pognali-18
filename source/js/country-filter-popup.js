var countryFilterToggle = document.querySelector(".country-filter__toggle");
var countryFilterToggleClose = document.querySelector(".country-filter__toggle--close");
var countryFilterLink = document.querySelector(".country-filter__link");
var countryFilterPopup = document.querySelector(".country-filter__table-wrapper");
var countryFilterClose = document.querySelector(".country-filter__popup-close");
var countryFilterWrapper = document.querySelector(".country-filter__wrapper");

countryFilterToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryFilterToggle.classList.add("country-filter__close");
  countryFilterWrapper.classList.add("country-filter__bg");
  countryFilterToggleClose.classList.add("country-filter__toggle--open");
  countryFilterPopup.classList.add("country-filter__open");
  countryFilterClose.classList.add("country-filter__open");
});

countryFilterToggleClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryFilterWrapper.classList.remove("country-filter__bg");
  countryFilterToggleClose.classList.remove("country-filter__toggle--open");
  countryFilterPopup.classList.remove("country-filter__open");
  countryFilterToggle.classList.remove("country-filter__close");
});

countryFilterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryFilterToggle.classList.remove("country-filter__close");
  countryFilterWrapper.classList.remove("country-filter__bg");
  countryFilterToggleClose.classList.remove("country-filter__toggle--open");
  countryFilterPopup.classList.remove("country-filter__open");
  countryFilterClose.classList.remove("country-filter__open");
});

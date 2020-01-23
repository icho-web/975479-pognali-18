var popupLink = document.querySelector(".page-header__toggle");
var pageHeaderList = document.querySelector(".page-header__list");
var pageHeaderNavList = document.querySelector(".page-header__nav-list");
var logo = document.querySelector(".page-header__logo-link");
var header = document.querySelector(".page-header__scroll-wrapper");
var slogan = document.querySelector(".page-header__form-wrapper");
var contactsWrapper = document.querySelector(".page-header__contacts-wrapper");
var autorization = document.querySelector(".page-header__nav-autorization");
var socialsList = document.querySelector(".page-header__socials-list");

pageHeaderList.classList.remove("page-header__list--close");
pageHeaderNavList.classList.remove("page-header__modal-open");
slogan.classList.remove("page-header__modal-close");
logo.classList.remove("page-header__blue-logo");
header.classList.remove("page-header--form-menu");
contactsWrapper.classList.remove("page-header__modal-open");
autorization.classList.remove("page-header__nav-autorization--open");
socialsList.classList.remove("page-header__modal-flex");
popupLink.classList.remove("page-header__toggle--close");
popupLink.classList.remove("visually-hidden");

popupLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  pageHeaderList.classList.toggle("page-header__list--close");
  pageHeaderNavList.classList.toggle("page-header__modal-open");
  slogan.classList.toggle("page-header__modal-close");
  logo.classList.toggle("page-header__blue-logo");
  header.classList.toggle("page-header--form-menu");
  contactsWrapper.classList.toggle("page-header__modal-open");
  autorization.classList.toggle("page-header__nav-autorization--open");
  socialsList.classList.toggle("page-header__modal-flex");
  popupLink.classList.toggle("page-header__toggle--close");
});

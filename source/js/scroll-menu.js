var scrollMenu = document.querySelector(".page-header__scroll-wrapper");

window.onscroll = function () {
  if (window.pageYOffset > 568) {
    scrollMenu.classList.add("page-header__scroll--active");
  }
  else if (window.pageYOffset < 568) {
    scrollMenu.classList.remove("page-header__scroll--active");
  }
};

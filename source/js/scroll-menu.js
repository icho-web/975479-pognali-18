var scrollMenu = document.querySelector(".page-header__scroll-menu");

window.onscroll = function () {
  if (window.pageYOffset > 150) {
    scrollMenu.classList.add("scroll-menu-open");
  }
  else if (window.pageYOffset < 150) {
    scrollMenu.classList.remove("scroll-menu-open");
  }
};

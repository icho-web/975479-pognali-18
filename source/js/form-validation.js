var form = document.querySelector(".form");
var plan = document.querySelectorAll(".fun__action");
var funError = document.querySelectorAll(".fun__error");
var funErrorCzech = document.querySelector(".fun__error--czech");

form.addEventListener("submit", function (evt) {
  for (var i = 0; i < plan.length; i++) {
    if (!plan[i].value) {
      evt.preventDefault();
      plan[i].classList.add("textarea-error");
      funError[i].classList.add("scroll-menu-open")
    } else {
      plan[i].classList.remove("textarea-error");
      funError[i].classList.remove("scroll-menu-open")
    }
  }
});

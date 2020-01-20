var form = document.querySelector(".registration__input-wrapper");
var plan = document.querySelector(".registration__input");

form.addEventListener("submit", function (evt) {
    if (!plan.value) {
      evt.preventDefault();
      plan.classList.add("input-error");
      plan.placeholder="Введите e-mail"
  }
});

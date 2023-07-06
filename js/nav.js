const primaryNav = document.querySelector(".nav__list");
const navToggle = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("translate");
  navToggle.classList.toggle("change");
});

const primaryNav = document.querySelector(".nav__list");
const navButton = document.querySelector(".nav__button");

navButton.addEventListener("click", () => {
  primaryNav.classList.toggle("translate");
  navButton.classList.toggle("change");
});

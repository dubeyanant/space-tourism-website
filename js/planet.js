// Selecting the tab buttons
const tabButtons = document.querySelectorAll(".moon, .mars, .europa, .titan");

// Selecting other elements
const heading = document.querySelector(".planet__info__heading");
const para = document.querySelector(".planet__info__para");
const distance = document.querySelector(".distance");
const time = document.querySelector(".time");
var image = document.querySelector(".planet__img");

// Arrays holding data for each planet
const titleArray = ["Moon", "Mars", "Europa", "Titan"];
const infoArray = [
  "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
];
const distanceArray = [
  "384,400 km",
  "225 MIL. km",
  "628 MIL. km",
  "1.6 BIL. km",
];
const timeArray = ["3 days", "9 months", "3 years", "7 years"];
const imageArray = [
  "assets/destination/image-moon.webp",
  "assets/destination/image-mars.webp",
  "assets/destination/image-europa.webp",
  "assets/destination/image-titan.webp",
];

// Function to change the active state of tab buttons
const changeState = function (n) {
  for (let i = 0; i < tabButtons.length; i++) {
    if (i == n) tabButtons[i].classList.add("active_tab");
    else tabButtons[i].classList.remove("active_tab");
  }
};

// Function to handle the change in state when a tab button is clicked
const change = function (n) {
  changeState(n);
  heading.textContent = titleArray[n];
  para.textContent = infoArray[n];
  distance.textContent = distanceArray[n];
  time.textContent = timeArray[n];
  image.setAttribute("src", imageArray[n]);
  image.setAttribute("alt", titleArray[n]);
};

// Adding event listeners to the tab buttons
tabButtons.forEach(function (button, index) {
  button.addEventListener("click", change.bind(null, index));
});

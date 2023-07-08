// Selecting the dot buttons
const dotButtons = document.querySelectorAll(
  ".first_dot, .second_dot, .third_dot, .fourth_dot"
);

// Selecting other elements: position, names, des, img
const position = document.querySelector(".people__info__data__position");
const names = document.querySelector(".people__info__data__name");
const des = document.querySelector(".people__info__data__des");
const image = document.querySelector(".people__img");

// Arrays holding data for each person
const positionArray = [
  "Commander",
  "Mission Specialist",
  "PILOT",
  "Flight Engineer",
];
const namesArray = [
  "Douglas Hurley",
  "MARK SHUTTLEWORTH",
  "Victor Glover",
  "Anousheh Ansari",
];
const desArray = [
  "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
];
const imageArray = [
  "assets/crew/image-douglas-hurley.webp",
  "assets/crew/image-mark-shuttleworth.webp",
  "assets/crew/image-victor-glover.webp",
  "assets/crew/image-anousheh-ansari.webp",
];

// Function to change the active state of dot buttons
const changeState = function (n) {
  for (let i = 0; i < dotButtons.length; i++) {
    if (i == n) dotButtons[i].classList.add("active_dot");
    else dotButtons[i].classList.remove("active_dot");
  }
};

// Function to handle the change in state when a dot button is clicked
const change = function (n) {
  changeState(n);
  position.textContent = positionArray[n];
  names.textContent = namesArray[n];
  des.textContent = desArray[n];
  image.setAttribute("src", imageArray[n]);
  image.setAttribute("alt", namesArray[n]);
};

// Adding event listeners to the dot buttons
dotButtons.forEach(function (button, index) {
  button.addEventListener("click", change.bind(null, index));
});

// Selecting the circle buttons
const circleButtons = document.querySelectorAll(
  ".first_button, .second_button, .third_button"
);

// Selecting other elements: heading, des, img
const heading = document.querySelector(".vehicle__info__data__heading");
const des = document.querySelector(".vehicle__info__data__des");
const imagel = document.querySelector(".vehicle__imgs__imgl");
const imagep = document.querySelector(".vehicle__imgs__imgp");

// Arrays holding data for each section
const headingArray = ["LAUNCH VEHICLE", "SPACEPORT", "SPACE CAPSULE"];
const desArray = [
  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
];
const imagelArray = [
  "assets/technology/image-launch-vehicle-landscape.jpg",
  "assets/technology/image-spaceport-landscape.jpg",
  "assets/technology/image-space-capsule-landscape.jpg",
];
const imagepArray = [
  "assets/technology/image-launch-vehicle-portrait.jpg",
  "assets/technology/image-spaceport-portrait.jpg",
  "assets/technology/image-space-capsule-portrait.jpg",
];

// Function to change the active state of circle buttons
const changeState = function (n) {
  for (let i = 0; i < circleButtons.length; i++) {
    if (i == n) circleButtons[i].classList.add("active_button");
    else circleButtons[i].classList.remove("active_button");
  }
};

// Function to handle the change in state when a circle button is clicked
const change = function (n) {
  changeState(n);

  heading.textContent = headingArray[n];
  des.textContent = desArray[n];

  imagel.setAttribute("src", imagelArray[n]);
  imagel.setAttribute("alt", headingArray[n]);

  imagep.setAttribute("src", imagepArray[n]);
  imagep.setAttribute("alt", headingArray[n]);
};

// Adding event listeners to the circle buttons
circleButtons.forEach(function (button, index) {
  button.addEventListener("click", change.bind(null, index));
});

import imageDouglasHurley from "../assets/crew/image-douglas-hurley.webp";
import imageMarkShuttleworth from "../assets/crew/image-mark-shuttleworth.webp";
import imageVictorGlover from "../assets/crew/image-victor-glover.webp";
import imageAnoushehAnsari from "../assets/crew/image-anousheh-ansari.webp";

// Object holding data for each person
const peopleObject = [
  {
    position: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: imageDouglasHurley,
  },
  {
    position: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: imageMarkShuttleworth,
  },
  {
    position: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: imageVictorGlover,
  },
  {
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: imageAnoushehAnsari,
  },
];

// Selecting the dot buttons container
const dotButtonsContainer = document.querySelector(".people__info__dots");

// Function to create a dot button
const createDotButton = function (index) {
  const button = document.createElement("span");
  button.classList.add("people__info__dots__dot");
  if (index === 0) button.classList.add("active_dot"); // Add active_dot class to the first button
  button.addEventListener("click", change.bind(null, index));
  return button;
};

// Function to update the dot buttons
const updateDotButtons = function () {
  for (let i = 0; i < peopleObject.length; i++) {
    const button = createDotButton(i);
    dotButtonsContainer.appendChild(button);
  }
};

// Function to change the active state of dot buttons
const changeState = function (n) {
  const dotButtons = document.querySelectorAll(".people__info__dots__dot");
  for (let i = 0; i < dotButtons.length; i++) {
    if (i === n) dotButtons[i].classList.add("active_dot");
    else dotButtons[i].classList.remove("active_dot");
  }
};

// Function to handle the change in state when a dot button is clicked
const change = function (n) {
  changeState(n);

  const position = document.querySelector(".people__info__data__position");
  const names = document.querySelector(".people__info__data__name");
  const des = document.querySelector(".people__info__data__des");
  const image = document.querySelector(".people__img");

  position.textContent = peopleObject[n].position;
  names.textContent = peopleObject[n].name;
  des.textContent = peopleObject[n].description;

  image.setAttribute("src", peopleObject[n].image);
  image.setAttribute("alt", peopleObject[n].name);
};

// Call the function to create initial dot buttons
updateDotButtons();

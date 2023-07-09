import imageLaunchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import imageLaunchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import imageSpaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import imageSpaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import imageSpaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import imageSpaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";

// Objects holding data for each technology
const technologyObject = [
  {
    heading: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagel: imageLaunchVehicleLandscape,
    imagep: imageLaunchVehiclePortrait,
  },
  {
    heading: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imagel: imageSpaceportLandscape,
    imagep: imageSpaceportPortrait,
  },
  {
    heading: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imagel: imageSpaceCapsuleLandscape,
    imagep: imageSpaceCapsulePortrait,
  },
];

// Selecting the circle buttons container
const circleButtonsContainer = document.querySelector(
  ".vehicle__info__buttons"
);

// Function to create a circle button
const createCircleButton = function (index) {
  const button = document.createElement("div");
  button.classList.add("vehicle__info__buttons__button");
  button.textContent = index + 1;
  if (index === 0) button.classList.add("active_button"); // Add active_dot class to the first button
  button.addEventListener("click", change.bind(null, index));
  return button;
};

// Function to update the circle buttons
const updateCircleButtons = function () {
  for (let i = 0; i < technologyObject.length; i++) {
    const button = createCircleButton(i);
    circleButtonsContainer.appendChild(button);
  }
};

// Function to change the active state of circle buttons
const changeState = function (n) {
  const circleButtons = document.querySelectorAll(
    ".vehicle__info__buttons__button"
  );
  for (let i = 0; i < circleButtons.length; i++) {
    if (i == n) circleButtons[i].classList.add("active_button");
    else circleButtons[i].classList.remove("active_button");
  }
};

// Function to handle the change in state when a circle button is clicked
const change = function (n) {
  changeState(n);

  const heading = document.querySelector(".vehicle__info__data__heading");
  const des = document.querySelector(".vehicle__info__data__des");
  const imagel = document.querySelector(".vehicle__imgs__imgl");
  const imagep = document.querySelector(".vehicle__imgs__imgp");

  heading.textContent = technologyObject[n].heading;
  des.textContent = technologyObject[n].description;

  imagel.setAttribute("src", technologyObject[n].imagel);
  imagel.setAttribute("alt", technologyObject[n].heading);

  imagep.setAttribute("src", technologyObject[n].imagep);
  imagep.setAttribute("alt", technologyObject[n].heading);
};

// Call the function to create initial circle buttons
updateCircleButtons();

// Object holding data for each planet
const planetObject = [
  {
    title: "Moon",
    info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
    image: "assets/destination/image-moon.webp",
  },
  {
    title: "Mars",
    info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
    image: "assets/destination/image-mars.webp",
  },
  {
    title: "Europa",
    info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
    image: "assets/destination/image-europa.webp",
  },
  {
    title: "Titan",
    info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
    image: "assets/destination/image-titan.webp",
  },
];

// Selecting the tab buttons container
const tabButtonsContainer = document.querySelector(".planet__info__tabs");

// Function to create a tab button
const createTabButton = function (index) {
  const li = document.createElement("li");

  const button = document.createElement("button");
  button.classList.add("tab");
  if (index === 0) button.classList.add("active_tab"); // Add active_tab class to the first button
  button.addEventListener("click", change.bind(null, index));
  li.appendChild(button);

  const h5 = document.createElement("h5");
  h5.textContent = planetObject[index].title;
  button.appendChild(h5);

  return li;
};

// Function to update the tab buttons
const updateTabButtons = function () {
  tabButtonsContainer.innerHTML = ""; // Clear the existing buttons
  for (let i = 0; i < planetObject.length; i++) {
    const button = createTabButton(i);
    tabButtonsContainer.appendChild(button);
  }
};

// Function to change the active state of tab buttons
const changeState = function (n) {
  const tabButtons = document.querySelectorAll(".tab");
  for (let i = 0; i < tabButtons.length; i++) {
    if (i === n) {
      tabButtons[i].classList.add("active_tab");
    } else {
      tabButtons[i].classList.remove("active_tab");
    }
  }
};

// Function to handle the change in state when a tab button is clicked
const change = function (n) {
  changeState(n);

  const heading = document.querySelector(".planet__info__heading");
  const para = document.querySelector(".planet__info__para");
  const distance = document.querySelector(".distance");
  const time = document.querySelector(".time");
  const image = document.querySelector(".planet__img");

  heading.textContent = planetObject[n].title;
  para.textContent = planetObject[n].info;

  distance.textContent = planetObject[n].distance;
  time.textContent = planetObject[n].time;

  image.setAttribute("src", planetObject[n].image);
  image.setAttribute("alt", planetObject[n].title);
};

// Call the function to create initial tab buttons
updateTabButtons();

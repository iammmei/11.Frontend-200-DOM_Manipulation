const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// Selectionner les carrés
let SquareGreen = document.querySelector(".green");
let SquareMagenta = document.querySelector(".violet");
let SquareOrange = document.querySelector(".orange");

let displayedWrapper = document.querySelector(".displayedsquare-wrapper");
let ul = document.querySelector("ul");

SquareGreen.addEventListener("click", () => {
  let newSquareGreen = document.createElement("div");
  newSquareGreen.classList.add("displayedsquare", "green");
  displayedWrapper.appendChild(newSquareGreen);
  alert("Green");

  let newLi = document.createElement("li");
  endTime = new Date();
  let timeLapse = getElapsedTime();
  let message = "Square created. Time lapse: " + timeLapse + "s";
  let textNode = document.createTextNode(message);
  newLi.appendChild(textNode);
  ul.appendChild(newLi);
});

SquareMagenta.addEventListener("click", () => {
  let newSquareMagenta = document.createElement("div");
  newSquareMagenta.classList.add("displayedsquare", "violet");
  displayedWrapper.appendChild(newSquareMagenta);
  alert("Violet");

  let newLi = document.createElement("li");
  endTime = new Date();
  let timeLapse = getElapsedTime();
  let message = "Square created. Time lapse: " + timeLapse + "s";
  let textNode = document.createTextNode(message);
  newLi.appendChild(textNode);
  ul.appendChild(newLi);
});

SquareOrange.addEventListener("click", () => {
  let newSquareOrange = document.createElement("div");
  newSquareOrange.classList.add("displayedsquare", "orange");
  displayedWrapper.appendChild(newSquareOrange);
  alert("Orange");

  let newLi = document.createElement("li");
  endTime = new Date();
  let timeLapse = getElapsedTime();
  let message = "Square created. Time lapse: " + timeLapse + "s";
  let textNode = document.createTextNode(message);
  newLi.appendChild(textNode);
  ul.appendChild(newLi);
});

const body = document.querySelector("body");
body.addEventListener("keypress", (event) => {
  console.log("hello");
  if (event.key === " ") {
    document.body.style.background = getRandomColor();
  } else if (event.key === "l") {
    let liElements = document.querySelectorAll("li");
    while (liElements.length > 0) {
      liElements[liElements.length - 1].remove();
      liElements.splice(1, liElements.length - 1);
    }
  } else if (event.key === "s") {
    let displayedsquare = document.querySelectorAll(".displayedsquare");

    Array.from(displayedsquare).forEach((displayedsquare) => {
      displayedsquare.parentNode.removeChild(displayedsquare);
    });
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square

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

  let newLi = document.createElement("li");

  endTime = new Date();
  let timeLapse = getElapsedTime();
  let message = "Square created. Time lapse: " + timeLapse + "ms";
  let textNode = document.createTextNode(message);
  newLi.appendChild(textNode);
  ul.appendChild(newLi);
});

// const clickOnSquare = (e) => {
//     console.log(e.target.classList[1]);
//     console.log(getElapsedTime());
//   };

SquareMagenta.addEventListener("click", () => {
  let newSquareMagenta = document.createElement("div");
  newSquareMagenta.classList.add("displayedsquare", "violet");
  displayedWrapper.appendChild(newSquareMagenta);
  let newLi = document.createElement("li");

  endTime = new Date();
  let timeLapse = getElapsedTime();
  let message = "Square created. Time lapse: " + timeLapse + "ms";
  let textNode = document.createTextNode(message);
  newLi.appendChild(textNode);
  ul.appendChild(newLi);
});

SquareOrange.addEventListener("click", () => {
  let newSquareOrange = document.createElement("div");
  newSquareOrange.classList.add("displayedsquare", "orange");
  displayedWrapper.appendChild(newSquareOrange);
  let newLi = document.createElement("li");

  endTime = new Date();
  let timeLapse = getElapsedTime();
  let message = "Square created. Time lapse: " + timeLapse + "ms";
  let textNode = document.createTextNode(message);
  newLi.appendChild(textNode);
  ul.appendChild(newLi);
});

//quand c une variable dans append child pas besoin de guillemets

//code a executer quand on appuyer sur square green, CREATE ELEMENT crééer une variable lets new square , l'append le rajouter dans le dom + rajouter class
//event pour chaque couleur

//on click le carré a été appuyé event listener dans ul
// selectionner la section ou vont apparaitre les nouveau carrés
//on click créer une variable  classe+ div append dans la partie haute
//quand j'appuye nouvelle div correspondant à la couleur et action log

//Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

// function addNew() {
//   const section = document.createElement("section");
//   const paragraph = document.createElement("p");
//   console.log("hello");
//   paragraph.createTextNode("Safa");

//   section.appendChild(paragraph);
//   document.body.appendChild(section);
// }

addNew();
//CALL THE FUNCTION!!!!
function addNew() {
  const learners = ["Safa", "John", "Emily", "Michael"]; // Replace with the names of your learners
  const article = document.querySelector("article");

  learners.forEach(function (learner) {
    const section = document.createElement("section");
    const paragraph = document.createElement("p");
    const randomColor = getRandomColor();

    section.style.backgroundColor = randomColor;
    paragraph.textContent = learner;

    section.appendChild(paragraph);
    article.appendChild(section);
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

addNew();

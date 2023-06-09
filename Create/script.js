//Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

function addNew() {
  const section = document.createElement("section");
  const paragraph = document.createElement("p");
  console.log("hello");
  //   paragraph.createTextNode("Safa");

  //   section.appendChild(paragraph);
  document.body.appendChild(section);
}

addNew();
//CALL THE FUNCTION!!!!

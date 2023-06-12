//Select the last child of the <ol> tag and put it at the beginning of the list

// const ol = document.querySelector("ol");
// const olChildren = ol.children;

// console.log(olChildren);
// console.log(ol.children[3].nextElementSibling);

// const a = ol.children[0];
// const b = ol.children[4];
// //Insert beofre to add an element before another one
// ol.insertBefore(b, a);

// Move the <h2> of the third section in the second one and vice-versa

const section = document.querySelectorAll("section");
console.log(section);

const secondS = section[1];
const thirdS = section[2];
console.log(thirdS);
const changedSection = thirdS.appendChild(secondS);

changedSection.remove();
const secondSchildren = secondS.children;
const thirdSchildren = thirdS.children;
console.log(secondSchildren);
console.log(thirdSchildren);

const h2 = document.querySelectorAll("h2");
console.log(h2);

Sh2 = h2[1];
Sh3 = h2[2];

// Delete the last section from the DOM, we don't need it anyways
// changeS.remove();

//Select the last child of the <ol> tag and put it at the beginning of the list

const ol = document.querySelector("ol");
const olChildren = ol.children;

console.log(olChildren);
console.log(ol.children[3].nextElementSibling);

const a = ol.children[0];
const b = ol.children[4];
b.appendChild(a);

// Move the <h2> of the third section in the second one and vice-versa
// Delete the last section from the DOM, we don't need it anyways

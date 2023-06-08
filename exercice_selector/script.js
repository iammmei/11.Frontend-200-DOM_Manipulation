// //".important".attr("title", "This is an important item.");
// //console.log("title");

// let important = document.querySelectorAll(`.important`);
// //console.log(important);

// for (let i = 0; i < important.length; i++) {
//   //using the loop to go through all the elements , length= the number of elementsso when we define important
//   important[i].setAttribute("title", "This is an important item");
//   // each element being looped through and added attribute
//   console.log(important[i]);
//   //print the information of element with index important with the set attribute title
// }

// //Select all the img tags and loop through them. If they have no important class, turn their display property to none

// let img = document.querySelectorAll("img");
// for (let i = 0; i < img.length; i++) {
//   if (img[i].classList.contains("important") === true) {
//   } else {
//     img[i].style.display = "none";
//   }
// }

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

let paragraphs = document.querySelectorAll("p");
let paragraphsText = paragraphs.innerText;
// console.log(paragraphsText);

for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i])
  // if (paragraphs[i].classList === true) {
  //   console.log(paragraphs.classList);
  // }
}

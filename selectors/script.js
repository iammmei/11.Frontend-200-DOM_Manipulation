//".important".attr("title", "This is an important item.");
//console.log("title");

let important = document.querySelectorAll(`.important`);
console.log(important);
console.log(important[1]);
for (let i = 0; i < important.length; i++) {
  important[i].title = `This is an important item`;
  console.log(important[i]);
}

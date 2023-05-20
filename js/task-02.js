const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");

const listOfItems = ingredients.map((ingredient) => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.innerText = ingredient;
  return item;
});
list.append(...listOfItems);

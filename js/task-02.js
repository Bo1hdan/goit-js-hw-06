const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerText = ingredient;
  list.append(listItem);
});

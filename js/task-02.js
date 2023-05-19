const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");
let arr = [];

ingredients.forEach((ingredient) => {
  let listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerText = ingredient;
  arr.push(listItem);
  list.append(listItem);
});

//Я не впевнений що це правильно

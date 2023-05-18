function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let body = document.querySelector("body");
let span = document.querySelector(".color");
let btn = document.querySelector(".change-color");

btn.addEventListener("click", () => {
  let changed = (body.style.backgroundColor = getRandomHexColor());

  span.textContent = changed;
});

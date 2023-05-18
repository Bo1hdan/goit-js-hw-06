let counterValue = document.querySelector("span");
let decrement = document.querySelector("button[data-action='decrement']");
let increment = document.querySelector("button[data-action='increment']");

counterValue.innerText = 0;

decrement.addEventListener("click", () => {
  counterValue.innerText--;
});

increment.addEventListener("click", () => {
  counterValue.innerText++;
});

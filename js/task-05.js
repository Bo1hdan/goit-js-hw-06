let input = document.querySelector("#name-input");
let greet = document.querySelector("#name-output");

input.addEventListener("input", () => {
  greet.innerText = input.value;
  if (input.value === "") {
    greet.innerText = "Anonymous";
  }
});

let input = document.querySelector("#font-size-control");

let span = document.querySelector("#text");

span.style.fontSize = `${input.value}px`;

input.addEventListener("input", () => {
  span.style.fontSize = `${input.value}px`;
});

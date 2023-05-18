let form = document.querySelector(".login-form");
let email = document.querySelector("input[name=email]");
let password = document.querySelector("input[name=password]");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value === "" || password.value === "") {
    alert("All fields must be completed");
    return;
  }

  const data = { email: email.value, password: password.value };
  console.log(data);

  form.reset();
});

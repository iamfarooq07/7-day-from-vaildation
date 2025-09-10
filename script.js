const firstName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("submit");
const from = document.getElementById("myForm");

from.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = firstName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  if (nameVal.length < 3) {
    alert("Username must be at least 3 characters long");
    return;
  }

  if (!emailVal.includes("@")) {
    alert("Please Enter Valid Email");
    return;
  }

  if (passwordVal.length < 6) {
    alert("password must be at least 6 characters long");
    return;
  }

  firstName.value = "";
  email.value = "";
  password.value = "";

  alert("Form Submited Successfully!");
});

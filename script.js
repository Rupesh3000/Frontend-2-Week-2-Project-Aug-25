const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");
const form = document.getElementById("signupForm");

let isEmailValid = false;
let isPasswordValid = false;

// Email validation
emailInput.addEventListener("change", function () {
  const email = emailInput.value;
  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailError.style.display = "none";
    isEmailValid = true;
  } else {
    emailError.textContent =
      'Make sure email is more than 3 characters and has "@" and "."';
    emailError.style.display = "block";
    isEmailValid = false;
  }
  checkFormValidity();
});

// Password validation
passwordInput.addEventListener("change", function () {
  const password = passwordInput.value;
  if (password.length > 8) {
    passwordError.style.display = "none";
    isPasswordValid = true;
  } else {
    passwordError.textContent = "Make sure password is more than 8 characters";
    passwordError.style.display = "block";
    isPasswordValid = false;
  }
  checkFormValidity();
});

// Check if both fields are valid to show success message
function checkFormValidity() {
  if (isEmailValid && isPasswordValid) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
}

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (isEmailValid && isPasswordValid) {
    if (confirm("Are you sure you want to submit?")) {
      alert("Successful signup!");
      form.reset();
      emailError.style.display = "none";
      passwordError.style.display = "none";
      successMessage.style.display = "none";
      isEmailValid = false;
      isPasswordValid = false;
    } else {
      window.location.reload();
    }
  } else {
    alert("Please fix the errors before submitting.");
  }
});

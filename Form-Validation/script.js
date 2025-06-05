function validateForm() {
    debugger
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  const errorMsg = document.getElementById("error-msg");
  const successMsg = document.getElementById("success-msg");
  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (!name || !email || !password || !confirm) {
    errorMsg.textContent = "Please fill in all the fields.";
    return false;
  }

  if (!email.includes("@") || !email.endsWith(".com")) {
    errorMsg.textContent = "Please enter a valid email address.";
    return false;
  }

  if (password !== confirm) {
    errorMsg.textContent = "Passwords do not match.";
    return false;
  }

  successMsg.textContent = "Form submitted successfully!";
  return false; // prevent actual submission for demo
}

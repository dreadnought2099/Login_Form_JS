function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  const validUsers = {
    "qwer@gmail.com": "password1",
    "yutang@gmail.com": "password2",
  };

  if (validUsers[username] && validUsers[username] === password) {
    alert("Login successful!");
    return true;
  } else {
    errorMessage.textContent = "Invalid username or password!";
    return false;
  }
}

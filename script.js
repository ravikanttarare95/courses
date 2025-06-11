function toggleEye() {
  const eyePasswordIcon = document.getElementById("eye-closed-icon");
  const loginPasswordField = document.getElementById("login-password-field");

  if (loginPasswordField.type === "password") {
    loginPasswordField.type = "text";
    eyePasswordIcon.src = "./../images/eye-open.png";
  } else {
    loginPasswordField.type = "password";
    eyePasswordIcon.src = "./../images/eye-closed.png";
  }
}

const userIcon = document.querySelector(".user-profile-icon");
userIcon.addEventListener("click", showHiddenLoginInfo);
const loginInfo = document.getElementById("hidden-login-info");

function showHiddenLoginInfo() {
  if (loginInfo.style.display === "none") {
    loginInfo.style.display = "block";
  } else {
    loginInfo.style.display = "none";
  }
}

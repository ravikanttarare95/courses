let cardContainer = document.getElementById("cards-container");
let productTitle = document.getElementById("product-title");
let productDescription = document.getElementById("product-description");
let productDate = document.getElementById("product-date");
let productTime = document.getElementById("product-time");
let productInstructor = document.getElementById("product-instructor-name");
let productPrice = document.getElementById("product-price");
let productImageURL = document.getElementById("product-image-url");
let InstructorImageURL = document.getElementById("instructor-image-url");

let existingCards = JSON.parse(localStorage.getItem("productCards")) || [];

function addcard() {
  if (
    !productImageURL.value ||
    !productTitle.value ||
    !productDescription.value ||
    !productDate.value ||
    !productTime.value ||
    !InstructorImageURL.value ||
    !productInstructor.value ||
    !productPrice.value
  ) {
    alert("Please fill in all fields.");
    return;
  }

  let newCard = {
    productImageURL: productImageURL.value,
    productTitle: productTitle.value,
    productDescription: productDescription.value,
    productDate: productDate.value,
    productTime: productTime.value,
    InstructorImageURL: InstructorImageURL.value,
    productInstructor: productInstructor.value,
    productPrice: productPrice.value,
  };
  existingCards.push(newCard);
  localStorage.setItem("productCards", JSON.stringify(existingCards));
  alert(`
Course added successfully!
Check your Card in All Courses Page!`);
  clearInput();
  renderCards();
}

function clearInput() {
  productImageURL.value = "";
  productTitle.value = "";
  productDescription.value = "";
  productDate.value = "";
  productTime.value = "";
  InstructorImageURL.value = "";
  productInstructor.value = "";
  productPrice.value = "";
}


renderCards();

// Doubt Here

// If I use these declaration here just above the toggleEye(), it won't run toggleEye() onclick

// Why this Behaviour????????????????????????????????????????????????????????????????

// const eyePasswordIcon = document.getElementById("eye-closed-icon");
// const loginPasswordField = document.getElementById("login-password-field");

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

function showHiddenLoginInfo() {
  // There is some BUG here
  const loginInfo = document.getElementById("hidden-login-info");

  if (loginInfo.className.includes("hidden-login-link")) {
    loginInfo.classList.add("show-login-link");
    loginInfo.classList.remove("hidden-login-link");
  } else {
    loginInfo.classList.remove("show-login-link");
    loginInfo.classList.add("hidden-login-link");
  }
}

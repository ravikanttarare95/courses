// let cardContainer = document.getElementById("cards-container");
let productTitle = document.getElementById("product-title");
let productDescription = document.getElementById("product-description");
let productCategory = document.getElementById("product-category");
let productMRP = document.getElementById("product-mrp");
let productImageURL = document.getElementById("product-image-url");

existingCards = JSON.parse(localStorage.getItem("productCards")) || [];

const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", addCard);

function addCard() {
  if (
    !productImageURL.value ||
    !productTitle.value ||
    !productDescription.value ||
    !productCategory.value ||
    !productMRP.value ||
    !perDiscount.value ||
    !finalPrice.value
  ) {
    alert("Please fill in all fields.");
    return;
  }

  let newCard = {
    productImageURL: productImageURL.value,
    productTitle: productTitle.value,
    productDescription: productDescription.value,
    productCategory: productCategory.value,
    productMRP: productMRP.value,
    perDiscount: perDiscount.value,
    finalPrice: finalPrice.value,
  };
  existingCards.push(newCard);
  localStorage.setItem("productCards", JSON.stringify(existingCards));
  alert(`
${productTitle.value} card added successfully!
Check your Card in All products Page!`);
  clearInput();
  renderCards();
}

function clearInput() {
  productImageURL.value = "";
  productTitle.value = "";
  productDescription.value = "";
  productCategory.value = "";
  productMRP.value = "";
  perDiscount.value = "";
  finalPrice.value = "";
}

// renderCards();

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

const userIcon = document.querySelector(".user-profile-icon");

userIcon.addEventListener("click", showHiddenLoginInfo);

function showHiddenLoginInfo() {
  // There is some BUG here
  const loginInfo = document.getElementById("hidden-login-info");

  if (loginInfo.classList.contains("hidden-login-link")) {
    loginInfo.classList.add("show-login-link");
    loginInfo.classList.remove("hidden-login-link");
  } else {
    loginInfo.classList.remove("show-login-link");
    loginInfo.classList.add("hidden-login-link");
  }
}

const perDiscount = document.getElementById("product-discount");
const mrp = document.getElementById("product-mrp");

perDiscount.addEventListener("change", calculateFinalPrice);
mrp.addEventListener("change", calculateFinalPrice);

function calculateFinalPrice() {
  const finalPrice = document.querySelector(".product-final-price");

  const mrpValue = parseFloat(mrp.value.replace(",", "")) || 0;
  const perDiscountValue = parseFloat(perDiscount.value) || 0;

  const discount = mrpValue * (perDiscountValue / 100);

  finalPrice.innerText = `₹${Math.round(mrpValue - discount)}`;
}

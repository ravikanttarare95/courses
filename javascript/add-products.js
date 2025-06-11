let productTitle = document.getElementById("product-title");
let productDescription = document.getElementById("product-description");
let productCategory = document.getElementById("product-category");
let productMRP = document.getElementById("product-mrp");
let productImageURL = document.getElementById("product-image-url");
const perDiscount = document.getElementById("product-discount");
const finalPrice = document.querySelector(".product-final-price");

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
    !finalPrice.innerText
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
    finalPrice: finalPrice.innerText,
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
  finalPrice.innerText = "";
}

perDiscount.addEventListener("change", calculateFinalPrice);
productMRP.addEventListener("change", calculateFinalPrice);

function calculateFinalPrice() {
  const productMRPValue = parseFloat(productMRP.value.replace(/,/g, "")) || 0;
  const perDiscountValue = parseFloat(perDiscount.value) || 0;

  const discount = productMRPValue * (perDiscountValue / 100);

  finalPrice.innerText = `₹${Math.round(productMRPValue - discount)}`;
}

// document.addEventListener("DOMContentLoaded", () => {
const cardContainer = document.getElementById("cards-container");
const selectProduct = document.getElementById("select-product");

let existingCards = JSON.parse(localStorage.getItem("productCards")) || [];

function renderCards() {
  cardContainer.innerHTML = "";
  const categorySelected = selectProduct.value || "all";
  let filteredCards = existingCards;

  if (categorySelected !== "all") {
    filteredCards = existingCards.filter(
      (element) =>
        element?.productCategory?.toLowerCase() ===
        categorySelected.toLowerCase()
    );
  }

  filteredCards.forEach((element, index) => {
    cardContainer.innerHTML += `
                <div class="card">
                <img src="../images/trash.png" alt="Delete Icon" class="card-delete-icon" data-index="${index}"/>
                    <img src="${
                      element.productImageURL
                    }" alt="Product Image" class="product-image"/>
                    <div class="product-details">
                        <h3 class="product-title">${element.productTitle}</h3>
                        <p class="product-category">${
                          element.productCategory || "N/A"
                        }</p>
                        <p class="product-description">${
                          element.productDescription || ""
                        }</p>
                        <p class="price"><strong>Price:</strong> ₹${
                          element.productPrice || 0
                        }</p>
                    </div>
                </div>
            `;
  });
}

selectProduct.addEventListener("change", () => {
  renderCards();
});

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-delete-icon")) {
    const confirmDelete = confirm(
      "Do you want to delete it? It cannot be recovered once deleted."
    );

    // if (!confirmDelete) return;
    if (confirmDelete === false) {
      return;
    }

    const dataIndex = e.target.dataset.index;
    existingCards.splice(dataIndex, 1);
    localStorage.setItem("productCards", JSON.stringify(existingCards));
    renderCards();
  }
});
renderCards();

// });

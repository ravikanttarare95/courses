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

    filteredCards.forEach((element) => {
      cardContainer.innerHTML += `
                <div class="card">
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

  selectProduct.addEventListener("change", renderCards);
  renderCards();
// });

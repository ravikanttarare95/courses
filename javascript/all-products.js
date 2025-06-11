// document.addEventListener("DOMContentLoaded", () => {
const cardContainer = document.getElementById("cards-container");
const selectProduct = document.getElementById("select-product");

const defaultCards = [
  {
    productImageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/r/c/j/-original-imahae3ea2j4mhkt.jpeg?q=70",
    productTitle: "boAt Airdopes",
    productCategory: "electronics",
    productDescription:
      "boAt Airdopes Alpha with 35 HRS Playback, 13mm Drivers, Dual Mics ENx & Beast Mode Bluetooth  (Deep Blue, In the Ear)",
    perDiscount: "77",
    productMRP: "3,490",
    finalPrice: "809",
  },
  {
    productImageURL:
      "https://css-buttons-and-cards.netlify.app/images/laptop.png",
    productTitle: "Acer Aspire 3 Laptop AMD Ryzen 7 Octa Core 7730U",
    productCategory: "laptops",
    productDescription:
      "(16 GB/1 TB SSD/Windows 11 Home) A325-42 Thin and Light Laptop (15.6 Inch, Silver, 1.79 Kg)",
    perDiscount: "40",
    productMRP: "79,990",
    finalPrice: "47,994",
  },
  {
    productImageURL:
      "https://css-buttons-and-cards.netlify.app/images/vivo-t-3-x.png",
    productTitle: "VIVO T3x 5G (Sapphire Blue, 128 GB) (4 GB RAM)",
    productCategory: "mobiles",
    productDescription:
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB. 17.07 cm (6.72 inch) Full HD+ Display. 50MP + 2MP | 8MP Front Camera 6000 mAh Battery.  6 Gen 1 Processor. ",
    perDiscount: "28",
    productMRP: "17,499",
    finalPrice: "12,599",
  },
  {
    productImageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/hammock-swing/s/f/o/37-20-blksw002-duzo-original-imahbg3nkjfrfjdy.jpeg?q=70",
    productTitle: "Jhula Hanging Swing Chair",
    productCategory: "fashion",
    productDescription:
      "duzo Jhula Hanging Swing Chair for Adult Balcony Steel Hammock  (Black, Pack of 4, DIY(Do-It-Yourself))",
    perDiscount: "75",
    productMRP: "21,999",
    finalPrice: "5500",
  },
  {
    productImageURL:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/outdoor-toy/c/v/v/-original-imah3kk2t4xjzfjs.jpeg?q=70",
    productTitle: "Wheel Kick Scooter",
    productCategory: "fashion",
    productDescription:
      "Miss & Chief Spartan Tiger - 3 Wheel Kick Scooter,Foldable with LED Wheels,Adjustable Height  (Pink)",
    perDiscount: "82",
    productMRP: "4,999",
    finalPrice: "899",
  },
];

let existingCards = JSON.parse(localStorage.getItem("productCards"));
// Very IMP *************
//If we add more cards in default array when already present default card is loaded on browser then new cards added in default cards will not be loaded on browser
if (!existingCards || existingCards.length === 0) {
  existingCards = defaultCards;
  localStorage.setItem("productCards", JSON.stringify(existingCards));
}

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
                          element.productCategory
                        }</p>
                        <p class="product-description">${
                          element.productDescription
                        }</p>
                        <p style="color:#25D366">(${
                          element.perDiscount
                        }% off)</p>
                        <div class="card-price-container">
                            <p class="mrp"><del>₹${element.productMRP}<del></p>
                            <p class="final-price">
                                <strong>₹${element.finalPrice.replace("₹", "")}
                                </strong>
                            </p>
                        </div>
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
    const dataIndex = e.target.dataset.index;
    if (dataIndex < defaultCards.length) {
      alert("Default cards cannot be deleted!");
      return;
    }

    const confirmDelete = confirm(
      "Do you want to delete it? It cannot be recovered once deleted."
    );

    // Ok-True     and     Cancel-false

    // if (!confirmDelete) return;
    if (confirmDelete === false) {
      return;
    }

    existingCards.splice(dataIndex, 1);
    saveToLocalStorage();
    renderCards();
  }
});
renderCards();

function saveToLocalStorage() {
  localStorage.setItem("productCards", JSON.stringify(existingCards));
}

// });

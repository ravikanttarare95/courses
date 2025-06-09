function renderCards() {
  cardContainer.innerHTML = "";

  // const categorySelected = document.getElementById("select-Product").value;
  // let filteredProductTitle = existingCards;

  // if (categorySelected !== "all") {
  //   filteredProductTitle = existingCards.filter((element) => {
  //     return element.productTitle === categorySelected;
  //   });
  // }

  existingCards.map((element) => {
    cardContainer.innerHTML += `
      <div class="card">

        <img src="${element.productImageURL}" alt="Product Image" class="product-image"/>
      <div class="product-details">
        <h3 class="product-title">${element.productTitle}</h3>
        <p class="product-description">${element.productDescription}</p>
        <p class="product-date">🗓️ <strong>Date:</strong> ${element.productDate}</p>
        <p class="product-time">⏱️ <strong>Time:</strong> ${element.productTime}</p>
      </div>
              <hr>
      <div class="product-instructor">
          <img src="${element.InstructorImageURL}" class="instructor-image">
          <div>
              <p><strong>Instructor:</strong> ${element.productInstructor}</p>
              <p> Instructor </p>
          </div>
      </div>
              <hr>
          <p class="price"><strong>Price:</strong> ₹${element.productPrice}</p>
      </div>
    `;
  });
}
renderCards();

let cardContainer = document.getElementById("cards-container");
let courseTitle = document.getElementById("course-title");
let courseDescription = document.getElementById("course-description");
let courseDate = document.getElementById("course-date");
let courseTime = document.getElementById("course-time");
let courseInstructor = document.getElementById("course-instructor-name");
let coursePrice = document.getElementById("course-price");

let existingCards = JSON.parse(localStorage.getItem("CourseCards")) || [];

function addcard() {
  if (
    !courseTitle.value ||
    !courseDescription.value ||
    !courseDate.value ||
    !courseTime.value ||
    !courseInstructor.value ||
    !coursePrice.value
  ) {
    alert("Please fill in all fields.");
    return;
  }

  let newCard = {
    courseTitle: courseTitle.value,
    courseDescription: courseDescription.value,
    courseDate: courseDate.value,
    courseTime: courseTime.value,
    courseInstructor: courseInstructor.value,
    coursePrice: coursePrice.value,
  };
  existingCards.push(newCard);
  localStorage.setItem("CourseCards", JSON.stringify(existingCards));
  clearInput();
  renderCards();
}

function clearInput() {
  courseTitle.value = "";
  courseDescription.value = "";
  courseDate.value = "";
  courseTime.value = "";
  courseInstructor.value = "";
  coursePrice.value = "";
}

function renderCards() {
  cardContainer.innerHTML = "";

  existingCards.forEach((card, index) => {
    cardContainer.innerHTML += `
      <div class="card">
        <h2>${card.courseTitle}</h2>
        <p>${card.courseDescription}</p>
        <p><strong>Date:</strong> ${card.courseDate}</p>
        <p><strong>Time:</strong> ${card.courseTime}</p>
        <p><strong>Instructor:</strong> ${card.courseInstructor}</p>
        <p><strong>Price:</strong> $${card.coursePrice}</p>
      </div>
    `;
  });
}
renderCards();

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

  existingCards.map((element, index) => {
    cardContainer.innerHTML += `
      <div class="card">
        <h2 class="course-title">${element.courseTitle}</h2>
        <p class="course-description">${element.courseDescription}</p>
        <p class="course-date"><strong>Date:</strong> ${element.courseDate}</p>
        <p class="course-time"><strong>Time:</strong> ${element.courseTime}</p>
        <p class="course-instructor"><strong>Instructor:</strong> ${element.courseInstructor}</p>
        <p class="price"><strong>Price:</strong> $${element.coursePrice}</p>
      </div>
    `;
  });
}
renderCards();

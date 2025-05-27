let cardContainer = document.getElementById("cards-container");
let courseTitle = document.getElementById("course-title");
let courseDescription = document.getElementById("course-description");
let courseDate = document.getElementById("course-date");
let courseTime = document.getElementById("course-time");
let courseInstructor = document.getElementById("course-instructor-name");
let coursePrice = document.getElementById("course-price");
let courseImage = document.getElementById("course-image");

let existingCards = JSON.parse(localStorage.getItem("CourseCards")) || [];

function addcard() {
  if (
    // !courseImage.src ||
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
    // courseImage: courseImage.src,
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
  // courseImage.src = "";
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

        <img src="${courseImage.files}" alt="Course Image" class="course-image">
      
        <h3 class="course-title">${element.courseTitle}</h3>
        <p class="course-description">${element.courseDescription}</p>
        <p class="course-date"><strong>Date:</strong> ${element.courseDate}</p>
        <p class="course-time"><strong>Time:</strong> ${element.courseTime}</p>
        <p class="course-instructor"><strong>Instructor:</strong> ${element.courseInstructor}</p>
        <p class="price"><strong>Price:</strong> ₹${element.coursePrice}</p>
      </div>
    `;
  });
}
renderCards();

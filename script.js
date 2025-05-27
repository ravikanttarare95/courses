let cardContainer = document.getElementById("cards-container");
let courseTitle = document.getElementById("course-title");
let courseDescription = document.getElementById("course-description");
let courseDate = document.getElementById("course-date");
let courseTime = document.getElementById("course-time");
let courseInstructor = document.getElementById("course-instructor-name");
let coursePrice = document.getElementById("course-price");
let courseImageURL = document.getElementById("course-image-url");

let existingCards = JSON.parse(localStorage.getItem("CourseCards")) || [];

function addcard() {
  if (
    !courseImageURL.value ||
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
    courseImageURL: courseImageURL.value,
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
  courseImageURL.value = "";
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

    console.log(courseImageURL.value);

    cardContainer.innerHTML += `
      <div class="card">

        <img src="${element.courseImageURL}" alt="Course Image" class="course-image"/>
      
        <h3 class="course-title">${element.courseTitle}</h3>
        <p class="course-description">${element.courseDescription}</p>
        <p class="course-date">🗓️ <strong>Date:</strong> ${element.courseDate}</p>
        <p class="course-time">⏱️ <strong>Time:</strong> ${element.courseTime}</p>
        <div class="course-instructor"><img src="./"/ class="instructor-image"> <div><p><strong>Instructor:</strong> ${element.courseInstructor}</p><p> Instructor </p></div></div>
        <p class="price"><strong>Price:</strong> ₹${element.coursePrice}</p>
      </div>
    `;
  });
}
renderCards();

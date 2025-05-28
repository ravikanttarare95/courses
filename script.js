let cardContainer = document.getElementById("cards-container");
let courseTitle = document.getElementById("course-title");
let courseDescription = document.getElementById("course-description");
let courseDate = document.getElementById("course-date");
let courseTime = document.getElementById("course-time");
let courseInstructor = document.getElementById("course-instructor-name");
let coursePrice = document.getElementById("course-price");
let courseImageURL = document.getElementById("course-image-url");
let InstructorImageURL = document.getElementById("instructor-image-url");

let existingCards = JSON.parse(localStorage.getItem("CourseCards")) || [];

function addcard() {
  if (
    !courseImageURL.value ||
    !courseTitle.value ||
    !courseDescription.value ||
    !courseDate.value ||
    !courseTime.value ||
    !InstructorImageURL.value ||
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
    InstructorImageURL: InstructorImageURL.value,
    courseInstructor: courseInstructor.value,
    coursePrice: coursePrice.value,
  };
  existingCards.push(newCard);
  localStorage.setItem("CourseCards", JSON.stringify(existingCards));
  alert("Course added successfully!");
  clearInput();
  renderCards();
}

function clearInput() {
  courseImageURL.value = "";
  courseTitle.value = "";
  courseDescription.value = "";
  courseDate.value = "";
  courseTime.value = "";
  InstructorImageURL.value = "";
  courseInstructor.value = "";
  coursePrice.value = "";
}

function renderCards() {
  cardContainer.innerHTML = "";

  const categorySelected = document.getElementById("select-Course").value;
  let filteredCourseTitle = existingCards;

  if (categorySelected !== "all") {
    filteredCourseTitle = existingCards.filter((element) => {
      return element.courseTitle === categorySelected;
    });
  }

  filteredCourseTitle.map((element) => {
    cardContainer.innerHTML += `
      <div class="card">

        <img src="${element.courseImageURL}" alt="Course Image" class="course-image"/>
      <div class="course-details">
        <h3 class="course-title">${element.courseTitle}</h3>
        <p class="course-description">${element.courseDescription}</p>
        <p class="course-date">🗓️ <strong>Date:</strong> ${element.courseDate}</p>
        <p class="course-time">⏱️ <strong>Time:</strong> ${element.courseTime}</p>
      </div>
              <hr>
      <div class="course-instructor">
          <img src="${element.InstructorImageURL}" class="instructor-image">
          <div>
              <p><strong>Instructor:</strong> ${element.courseInstructor}</p>
              <p> Instructor </p>
          </div>
      </div>
              <hr>
          <p class="price"><strong>Price:</strong> ₹${element.coursePrice}</p>
      </div>
    `;
  });
}
renderCards();

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

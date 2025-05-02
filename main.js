const ratingSection = document.querySelector(".rating-section");
const successSection = document.querySelector(".success-section");

const buttons = document.querySelectorAll(".rating-button");
const submitButtons = document.querySelector(".submit-button");
const selectedRating = document.getElementById("selected-rating");
const errorMessage = document.querySelector(".error-message");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

const toggleCards = () => {
  const selectedButton = document.querySelector(".rating-button.selected");

  if (selectedButton) {
    selectedRating.textContent = selectedButton.textContent;
    ratingSection.classList.toggle("hidden");
    successSection.classList.toggle("hidden");
    errorMessage.classList.remove("error");
  } else {
    errorMessage.classList.add("error");
  }
};

submitButtons.addEventListener("click", toggleCards);

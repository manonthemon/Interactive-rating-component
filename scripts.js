let ratingCard = document.getElementById("rating-card");
let thankyouCard = document.getElementById("thankyou-card");
let submitButton = document.getElementById("submit");



submitButton.addEventListener('click', function() {
    submitClick()
  });


  function submitClick() {
    ratingsCard.style.display = "none";
    thankyouCard.classList.remove("hidden");
    // questionText.textContent = quizQuestions[0].question;
    // questionsContainer.append(questionText);
};

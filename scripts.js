let ratingCard = document.getElementById("rating-card");
let thankyouCard = document.getElementById("thankyou-card");
let submitButton = document.getElementById("submit");


submitButton.addEventListener("click", function () {
    console.log("submit clicked")
    submitClick()
});


  function submitClick() {
    ratingCard.style.display = "none";
    thankyouCard.classList.remove("hidden");
    // questionText.textContent = quizQuestions[0].question;
    // questionsContainer.append(questionText);
};

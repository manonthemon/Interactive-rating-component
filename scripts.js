let ratingCard = document.getElementById("rating-card");
let thankyouCard = document.getElementById("thankyou-card");
let submitButton = document.getElementById("submit");
var btns = document.getElementsByClassName("btn-secondary");


submitButton.addEventListener("click", function () {
    submitClick()
});

  function submitClick() {
    ratingCard.style.display = "none";
    thankyouCard.classList.remove("hidden");
    // questionText.textContent = quizQuestions[0].question;
    // questionsContainer.append(questionText);
};


//Save value of rating button click to display on thank you card
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(event) {
    var rating = event.target.id; 
    $('#user-rating').append(rating);
  });
}


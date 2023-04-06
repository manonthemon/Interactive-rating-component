let ratingCard = document.getElementById("rating-card");
let thankyouCard = document.getElementById("thankyou-card");
let submitButton = document.getElementById("submit");
var btns = document.getElementsByClassName("btn-secondary");


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


// Add event listener to each button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(event) {
    var rating = event.target.id; // Get the ID of the clicked button
    $('#user-rating').append(rating);
    console.log("Clicked rating:", rating); // Print the ID to the console (you can save it to a variable or use it as needed)
  });
}


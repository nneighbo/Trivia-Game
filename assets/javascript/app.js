var correctAnswers = 0;
var timeRemaining = 60 * 1000;
var answers = [];


$(document).ready(function(){

$(".submit").on("click", function(){
    console.log("userGuess: " + userGuess);
    for (i = 1; i < 10; i++){
       var userGuess = $("input[name='question-" + i + "']:checked").val();
       if (userGuess === "true"){
        correctAnswers++
        console.log(correctAnswers);
       
        }
    }
    location.href = "../Trivia-Game/assets/end.html"
});

$(".reset-btn").on("click", function(){
    location.href = "../index.html"
});

});

// for every input === true gain ++ score, at end of time or end of questions switch page to score screen displaying score
// with a reset button to play again.

var correctAnswers = 0;
var timeRemaining = 60 * 1000;
var answers = [];
var userGuess;
$(document).ready(function () {
    var resetScreen = function () {
        renderScore();
        $("#reset-page").removeClass("hide");
        $("#game-start").empty();
        $("#game-start").append($("#reset-page"));
        $(".correct").append(correctAnswers);
        clearTimeout(timeOut);
        clearInterval(timer);
    }
    function renderScore() {
        for (i = 1; i < 11; i++) {
            var str = "question-" + i;
            userGuess = $("input[name='" + str + "']:checked").val();
            console.log("user guess: " + userGuess);
            if (userGuess === "true") {
                correctAnswers++
                console.log(correctAnswers);
            }
        }
    }

    var count = 60;
    var timer = setInterval(function () {
        $(".time-remaining").html("Time Remaining: " + count--);
        if (count === -1) clearInterval(timer);
    }, 1000);


    var timeOut = setTimeout(function () {
        resetScreen();
    }, timeRemaining);

    $(".submit").on("click", function () {
        resetScreen();
    });

    $(".reset-btn").on("click", function () {
        location.reload();
    });

});

// for every input === true gain ++ score, at end of time or end of questions switch page to score screen displaying score
// with a reset button to play again.

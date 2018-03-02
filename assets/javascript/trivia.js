
var questionOne = {
    correctAnswer: 1,
    image: "<img src='assets/images/dazzling.png'>",
    answImage: "<img src='assets/images/dazzling_blue.png'>",
    allAnswers: ["Dazzling Blue", "Azul", "Corn Flower Blue", "Brilliant Blue"],
}
var questionTwo = {
    correctAnswer: 2,
    image: "<img src='assets/images/ethereal.png'>", 
    answImage: "<img src='assets/images/ethereal_blue.png'>", 
    allAnswers: ["Classic Blue","Ethereal Blue","Dazzling Blue", "Corn Flower Blue"],
    
}
var questionThree = {
    correctAnswer: 1,
    image: "<img src='assets/images/snorkel.png'>", 
    answImage: "<img src='assets/images/snorkel_blue.png'>", 
    allAnswers: [ "Snorkel Blue", "Lapis Blue", "Ibiza Blue", "Elecetric Blue Lemonade"],
    
}
var questionFour = {
    correctAnswer: 2, 
    image: "<img src='assets/images/peacock.png'>",
    answImage: "<img src='assets/images/peacock_blue.png'>",
    allAnswers: ["Classic Blue", "Peackock Blue", "Capri", "Aquarius"]
}
var questionFive = {
    correctAnswer: 4,
    image: "<img src='assets/images/ibiza.png'>", 
    answImage: "<img src='assets/images/ibiza_blue.png'>", 
    allAnswers: ["Brilliant Blue", "Azul", "Corn Flower Blue", "Ibiza Blue"],
    
}
var questionSix = {
    correctAnswer: 3,
    image: "<img src='assets/images/baja.png'>",
    answImage: "<img src='assets/images/baja_blue.png'>",
    allAnswers: ["Caymen Blue", "Bluebird", "Baja Blue","Deep Ocean"],
}

var questionSeven = {
    correctAnswer:  4,
    image: "<img src='assets/images/scuba.png'>",
    answImage: "<img src='assets/images/scuba_blue.png'>",
    allAnswers: ["Biscay Blue", "Peackock Blue", "Marine Blue", "Scuba Blue"],
    
}
var questionEight = {
    correctAnswer: 2,
    image: "<img src='assets/images/brilliant.png'>",
    answImage: "<img src='assets/images/brilliant_blue.png'>",
    allAnswers: ["Corn Flower Blue", "Brilliant Blue", "Aquarius", "Hawiian Ocean"],   
    
}
var questionNine = {
    correctAnswer: 3, 
    image: "<img src='assets/images/hawaiian.png'>",
    answImage: "<img src='assets/images/hawaiian_ocean.png'>",
    allAnswers: ["Biscay Blue", "Peackock Blue", "Hawiian Ocean", "Marine Blue"],
    
}
var questionTen = {
    correctAnswer: 1,
    image: "<img src='assets/images/electric.png'>",
    answImage: "<img src='assets/images/electric_blue_lemonade.png'>",
    allAnswers: ["Elecetric Blue Lemonade", "Caymen Blue", "Bluebird", "Deep Ocean"],
}

var blues = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

var userAnswer;
var questionNumber;
var correctCounter = 0;
var questionCounter = 0;
var questionTimer = 0;
var time = 0;
var intervalId;


$("#words").html("<h2>Press Any Key To Play</h2>");
startScreen();


function askQuestion() {
    clearInterval(intervalId);
    reset();
    start();
    questionTimer = setTimeout(timesUp, 1000 * 15);
    if (questionCounter === 10) {
        endScreen();
    }
    else {
        questionNumber = blues[questionCounter];
        console.log("questionNumber", questionNumber); 
        $("#blue-image").html(questionNumber.image);
        $("#answer-1").html(questionNumber.allAnswers[0]);
        $("#answer-2").html(questionNumber.allAnswers[1]);
        $("#answer-3").html(questionNumber.allAnswers[2]);
        $("#answer-4").html(questionNumber.allAnswers[3]);
        $("#words").html("<h2>What is the pantone name for this color?</h2>");

        //console.log("questionnumber image)", questionNumber.image);
        //console.log("questionNumber.correctAnswer)", questionNumber.correctAnswer);

            $("button").off("click").on("click", function() {
                userAnswer = this.value;
                clearTimeout(questionTimer);
                console.log("user naswer", userAnswer);

                if (userAnswer == questionNumber.correctAnswer) {
                    correctCounter++; 
                    $("#words").html("<h2>That's correct!</h2>");
                    console.log("correctCounter", correctCounter);
                    answerScreen();                                
                }
                else {
                    $("#words").html("<h2>Nope :(  </h2>");
                    answerScreen();   
                }
            });
    }
}


function startScreen() {
    $(document).on("keyup", function(e){
        askQuestion();
    });
}


function answerScreen() {
    $("#blue-image").html(questionNumber.answImage);
    reset();
    clearInterval(intervalId);
    setTimeout(askQuestion, 1000 * 4);
    questionCounter++;
    console.log("questionCounter", questionCounter); 
}

function timesUp() {
    $("#blue-image").html(questionNumber.answImage);
    $("#words").html("<h2>Time's Up! :(  </h2>");
    reset();
    clearInterval(intervalId);
    setTimeout(askQuestion, 1000 * 4);
    questionCounter++;  
}

function endScreen() {
    reset();
    clearInterval(intervalId);
    clearTimeout(questionTimer);
    $("#words").html("<h2>Game Over. You answered " + correctCounter + " correctly!</h2>");

}

function reset() {
  time = 0;
    $("#timer").text("00:00");
}  
function start() {
  intervalId = setInterval(count, 1000);
}
function count() {
  time++;
  var converted = timeConverter(time);
  $("#timer").text(converted);
} 
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
    }

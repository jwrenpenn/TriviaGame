
var questionOne = {
    correctAnswer: 1,
    image: "<img src='assets/images/dazzling_blue.png'>",
    allAnswers: ["Dazzling Blue", "Azul", "Corn Flower Blue", "Brilliant Blue"],
}
var questionTwo = {
    correctAnswer: 2,
    image: "<img src='assets/images/brilliant_blue.png'>",
    allAnswers: ["Corn Flower Blue", "Brilliant Blue", "Aquarius", "Hawiian Ocean"],
}
var questionThree = {
    correctAnswer: 3, 
    image: "<img src='assets/images/hawiian_ocean.png'>",
    allAnswers: ["Biscay Blue", "Peackock Blue", "Hawiian Ocean", "Marine Blue"],
}
var questionFour = {
    correctAnswer: 2, 
    image: "<img src='assets/images/peacock_blue.png'>",
    allAnswers: ["Classic Blue", "Peackock Blue", "Capri", "Aquarius"]
}
var questionFive = {
    correctAnswer: 3,
    image: "<img src='assets/images/baja_blue.png'>",
    allAnswers: ["Caymen Blue", "Bluebird", "Baja Blue","Deep Ocean"],
}
var questionSix = {
    correctAnswer: 1,
    image: "<img src='assets/images/snorkel_blue.png'>", 
    allAnswers: [ "Snorkel Blue", "Lapis Blue", "Ibiza Blue", "Elecetric Blue Lemonade"],
}
var questionSeven = {
    correctAnswer: 2,
    image: "<img src='assets/images/ethereal_blue.png'>", 
    allAnswers: ["Classic Blue","Ethereal Blue","Dazzling Blue", "Corn Flower Blue"],
}
var questionEight = {
    correctAnswer: 4,
    image: "<img src='assets/images/ibiza_blue.png'>", 
    allAnswers: ["Brilliant Blue", "Azul", "Corn Flower Blue", "Ibiza Blue"],
}
var questionNine = {
    correctAnswer:  4,
    image: "<img src='assets/images/scuba_blue.png'>",
    allAnswers: ["Biscay Blue", "Peackock Blue", "Marine Blue", "Scuba Blue"],
}
var questionTen = {
    correctAnswer: 1,
    image:  "<img src='assets/images/electric_blue_lemonade.png'>",
    allAnswers: ["Elecetric Blue Lemonade", "Caymen Blue", "Bluebird", "Deep Ocean"],
}

var blues = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
var userAnswer;
var correctCounter = 0;
var time = 0;
var intervalId;
var questionAnswer;
  

askQuestion();

function askQuestion() {
    clearInterval(intervalId);
    reset();
    start();

    blues.forEach((blues, index) => {
        $("#blue-image").html(blues.image);
        $("#answer-1").html(blues.allAnswers[0]);
        $("#answer-2").html(blues.allAnswers[1]);
        $("#answer-3").html(blues.allAnswers[2]);
        $("#answer-4").html(blues.allAnswers[3]);
        questionAnswer = blues.correctAnswer;


        $("button").on("click", function() {
            userAnswer = this.value;
            setInterval(timesUp, 1000 * 15);
            console.log(userAnswer);

            if (userAnswer == questionAnswer) {
                correctCounter++; 
                console.log(correctCounter);
                clearInterval(intervalId);
                $("#question").html("<h2>That's correct!</h2>");
                                   
            }
            else {
                clearInterval(intervalId);
                $("#question").html("<h2>Nope :(  </h2>");
                
            }
        
        });
    });
}

function timesUp() {
    $("#question").html("<h2>Time's Up! :(  </h2>");
    setInterval(askQuestion, 1000 * 15);
    
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




//function returnScreenCorrect() {
//function returnScreenIncorrect() {

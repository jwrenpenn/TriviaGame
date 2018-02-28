window.onload = function() {
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
  };
  
var questionOne = {
    correctAnswer: "Dazzling Blue",
    image: "<img src='images/dazzling_blue.png'",
    allAnswers = ["Dazzling Blue", "Azul", "Corn Flower Blue", "Brilliant Blue"],
}
var questionTwo = {
    correctAnswer: "Brilliant Blue",
    image: "<img src='images/brilliant_blue.png'",
    allAnswers = ["Corn Flower Blue", "Brilliant Blue", "Aquarius", "Hawiian Ocean"],
}
var questionThree = {
    correctAnswer: "Hawiian Ocean", 
    image: "<img src='images/hawiian_ocean.png'",
    allAnswers = ["Biscay Blue", "Peackock Blue", "Hawiian Ocean", "Marine Blue"],
}
var questionFour = {
    correctAnswer: "Peackock Blue", 
    image: "<img src='images/peacock_blue.png'",
    allAnswers = ["Classic Blue", "Peackock Blue", "Capri", "Aquarius"]
}
var questionFive = {
    image: "Baja Blue",
    correctAnswer: "<img src='images/baja_blue.png'",
    allAnswers = ["Caymen Blue", "Bluebird", "Baja Blue","Deep Ocean"],
}
var questionSix = {
    correctAnswer: "Snorkel Blue",
    image: "<img src='images/snorkel_blue.png'", 
    allAnswers = [ "Snorkel Blue", "Lapis Blue", "Ibiza Blue", "Elecetric Blue Lemonade"],
}
var questionSeven = {
    correctAnswer: "Ethereal Blue",
    image: "<img src='images/ethereal_blue.png'", 
    allAnswers = ["Classic Blue","Ethereal Blue","Dazzling Blue", "Corn Flower Blue"],
}
var questionEight = {
    correctAnswer: "Ibiza Blue",
    image: "<img src='images/ibiza_blue.png'", 
    allAnswers = ["Brilliant Blue", "Azul", "Corn Flower Blue", "Ibiza Blue"],
}
var questionNine = {
    correctAnswer:  "Scuba Blue",
    image: "<img src='images/scuba_blue.png'",
    allAnswers = ["Biscay Blue", "Peackock Blue", "Marine Blue", "Baja Blue"],
}
var questionTen = {
    correctAnswer: "Elecetric Blue Lemonade",
    image:  "<img src='images/electric_blue_lemonade.png'",
    allAnswers = ["Elecetric Blue Lemonade", "Caymen Blue", "Bluebird", "Deep Ocean"],
}

var blues = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
var intervalId;
var clockRunning = false;
  
var stopwatch = {
  
    time: 0,
    lap: 1,
  
    reset: function() {
  
      stopwatch.time = 0;
      stopwatch.lap = 1;
      $("#display").text("00:00");
    },

    start: function() {
      if (!clockRunning) {
          intervalId = setInterval(stopwatch.count, 1000);
          clockRunning = true;
      }
    },

    stop: function() {
      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {
      stopwatch.time++;
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
      $("#display").text(converted);
    },

    timeConverter: function(t) {
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
  };
  
  function askQuestion() {
    setTimeout(someFunction, 1000 * 10);
    blues.forEach(index, index.image);
        $("#blue-image").html(blues.index.image);
        $("#answer-1").html(blues.index.allAnswers[0]);
        $("#answer-1").html(blues.index.allAnswers[1]);
        $("#answer-1").html(blues.index.allAnswers[2]);
        $("#answer-1").html(blues.index.allAnswers[3]);
}


function answerPage() {
    $("#timer").append("<h2>Time's Up!</h2>");
}





  // Solution if you choose not to put it in an object
  
  // var time = 0;
  // var lap = 1;
  // function reset() {
  
  //   time = 0;
  //   lap = 1;
  
  //   $("#display").text("00:00");
  //   $("#laps").text("");
  
  // }
  
  // function start() {
  //   intervalId = setInterval(count, 1000);
  // }
  
  // function stop() {
  
  //   console.log("stopping");
  //   clearInterval(intervalId);
  
  // }
  
  // function recordLap() {
  
  //   var converted = timeConverter(time);
  //   $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
  //   lap++;
  
  // }
  
  // function count() {
  
  //   time++;
  //   var converted = timeConverter(time);
  //   $("#display").text(converted);
  
  // }
  
  // function timeConverter(t) {
  
  //   var minutes = Math.floor(t / 60);
  //   var seconds = t - (minutes * 60);
  
  //   if (seconds < 10) {
  //     seconds = "0" + seconds;
  //   }
  
  //   if (minutes === 0) {
  //     minutes = "00";
  //   }
  //   else if (minutes < 10) {
  //     minutes = "0" + minutes;
  //   }
  
  //   return minutes + ":" + seconds;
  // }
  
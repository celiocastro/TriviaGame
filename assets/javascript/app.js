

var questions = [{
    ques: "When referring to a type of music, what does R&B stand for?",
    ans: ["Royals and Blues", "Rhythm and Blues", "Rok and Ballads", "Rock and Ball"],
    name: "oneQuestion",
    correct: "Rhythm and Blues",
    divClass: ".oneQuestion"
},
{
    ques: "Where did Reggaeton start?",
    ans: ["Colombia", "Dominican Republic", "Puerto Rico", "Venezuela"],
    name: "reggaeton",
    correct: "Puerto Rico",
    divClass: ".reggaeton"
},
{
    ques: "Who interrupted Taylor Swift’s acceptance speech at the 2009 Video Music Awards?",
    ans: ["Kanye West", "Jay Z", "Easy G", "Chris Browm"],
    name: "VMA",
    correct: "Kanye West",
    divClass: ".VMA"
},
{
    ques: "Where is Adele from?",
    ans: ["USA", "UK", "Ireland", "Australia"],
    name: "adele",
    correct: "UK",
    divClass: ".adele"
},
{
    ques: "How old was American musician Jimi Hendrix when he passed away in 1970?",
    ans: ["28", "27", "34", "36"],
    name: "Jimi",
    correct: "27",
    divClass: ".Jimi"
},
{
    ques: "When was the first grammy ceremony celebrated?",
    ans: ["1967", "1968", "1974", "1959"],
    name: "firstGrammy",
    correct: "1959",
    divClass: ".firstGrammy"
}
] 

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through then6 questions 
for (var j = 0; j <6; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] 
+ '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}

// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 6; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 7; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked. stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz
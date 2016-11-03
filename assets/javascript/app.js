$(document).ready(function () {


var counter;

//counter object
var clock = {
	time:30,

	count: function(){
		//time decreases by 1
		clock.time--;
		//get current time and pass into clock.timeConverter
		// save the result into a variable.
		var converted = clock.timeConverter(clock.time);//60
		
		//use the variable created to show the converted time
		$('#display').html(converted);
	},

	start: function(){
		//set interval to start the countdown
		counter= setInterval(clock.count,1000);
	},

  timeConverter: function(t){
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

};


/////////////////////////////////////////////////////////////////////////////////////////

//trivia object 
//function

function quizQuestion(question, choices, correctAnswer){
		//THIS refers to the parameters that are being used
		this.question =	question;
		this.choices = choices;
		this.correctAnswer = correctAnswer;
	}

		//might possibly create array 
		//all questions go here and then are parsed out .html too html page
	var questionsArray = [
	new quizQuestion('what is the name of this city', ['Chicago', 'Utah', 'Detroit', 'Phoenix'], 0),
	new quizQuestion('what is the name of this city', ['Chicago', 'Utah', 'Detroit', 'Phoenix'], 0),
	new quizQuestion('what is the name of this city', ['Chicago', 'Utah', 'Detroit', 'Phoenix'], 0),
	new quizQuestion('what is the name of this city', ['Chicago', 'Utah', 'Detroit', 'Phoenix'], 0),
	new quizQuestion('what is the name of this city', ['Chicago', 'Utah', 'Detroit', 'Phoenix'], 0)
	];

	var $question = $('#question');
	var $choices = $('#choices');

	
	var questionTracker = 0;


	//displays the questions and choices with radio inputs 
	//activated when start button is pressed
	$('#start').click(function displayGame (){
		$('#question').html(parseInt(questionsArray[questionTracker]) + 1 + ". " + questionsArray[questionTracker].question);
	var options = questionsArray[questionTracker].choices;
	var formHtml = ' ';
		 for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      questionsArray[0].choices[i] + '</label></div><br/>';
  }
  	$('#form').html(formHtml);
  $("#option0").prop('checked', true);
	});


	var correctAnswers = 0;
	var wrongAnswers = 0;
//checks user input to see if they selected the right or wrong answer
	function checkAns() {
  if ($("input[name=option]:checked").val() == questionsArray[0].correctAnswer) {
    correctAnswers ++; }
  else if ($("input[name=option]:checked").val() != questionsArray[0].correctAnswer) {
  	wrongAnswers ++; }
  };


	$('#submit').click(function(){
		checkAns();
		questionTracker++;

    console.log(correctAnswers);
    console.log(wrongAnswers);

	});





	
window.onload = function(){
	//start button displays and activates timer and displays all the questions/answers
	$('#start').on('click', clock.start);
	$('#start').on('click', displayGame());
	

};



})



//	$choices.html(questionsArray[i++].choices);




	

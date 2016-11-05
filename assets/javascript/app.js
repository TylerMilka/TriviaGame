


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
    },

    //function that stops the clock from counting down
    stop: function(){
    	clearInterval(counter);
    },

};

function gameOver(){
	if (clock.timer === 27){
		alert("gameOver")
	}
}

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
	new quizQuestion('Prior to 2016, when was the last time the Cubs won the World Series?', ['1908', '1904', '1923', '2007'], 0),
	new quizQuestion('Who are the current owners of the Chicago Cubs', ['The Murhpy\'s', 'The Rickets', 'Sammy Sosa', 'Micael Jordan'], 1),
	new quizQuestion('What happens if the ball gets stuck in the ivy growing along the outfield fence?', ['In the park Home Run', 'Ground Rule Double', 'Everybody gets a free beer', 'Batter is out'], 1),
	new quizQuestion('What direction does the homeplate point towards?', ['NorthEast', 'SouthWest', 'NorthEast', 'NorthWest'], 1),
	new quizQuestion('What does the W on their flag stand for?', ['Windy', 'Watch', 'Win', 'Weee'], 2),
	new quizQuestion('How many all star games were played at Wrigley Field?', ['3', '4', '2', '5'], 0),
	new quizQuestion('Who was the last Cub to win an MVP award?', ['Ernie Banks', 'Derrick Lee', 'Ken Hubbs', 'Sammy Sosa'], 3),
	];

	//setting various variables
	var $question = $('#question');
	var $choices = $('#choices');
	var currentQuestion = 0;
	



	//displays the questions and choices with radio inputs 
	//activated when start button is
	function displayGame(){

		//for loop that runs through the array, the other for loop runs through the options array
		//they are then added to the dom when the function is activated
		for (var i = 0; i < questionsArray.length; i++){
		$('#question').html(parseInt(currentQuestion) + 1 + ". " + questionsArray[currentQuestion].question);
	};
	var options = questionsArray[currentQuestion].choices;
	var formHtml = ' ';
		 for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      questionsArray[currentQuestion].choices[i] + '</label></div><br/>';
 	 }

  		$('#form').html(formHtml);
  		$("#option0").prop('checked', true);
	};


	var correctAnswers = 0;
	
//checks user input to see if they selected the right or wrong answer
	function checkAns() {
  if ($("input[name=option]:checked").val() == questionsArray[currentQuestion].correctAnswer) {
    correctAnswers ++; 
	}
}

   	$(document).ready(function(){
   			
  	var $start= $('#start');
  	var $question= $('#question');
  	var $h3 =  $('#h3');
  	var $submit = $('#submit');
  	var $score = $('#score');
  	var $timeremaining = $('#timeremaining');

   		$question.hide(); //hides certain dom elements until the the start button is pressed
  		$h3.hide();
  		$submit.hide();
  		$score.hide();
  		$timeremaining.hide();



  	$('#start').click(function(){

  		clock.start();	//starts timer function
  		displayGame();	//activate the displayGame function
  		$timeremaining.fadeIn(); //displays other dom elements
  		$h3.fadeIn();
  		$question.fadeIn();
  		$submit.fadeIn(1500);
  	});




	$('#submit').click(function(){		//activated function when submit button is pressed
		event.preventDefault();			
		checkAns();						//activates checkAns() function
		currentQuestion++;
		if (currentQuestion < questionsArray.length){
			
			displayGame();
		}
		if (currentQuestion === questionsArray.length-1){

			$score.fadeIn(1500).html("You answered " + correctAnswers + " correctly" + "<br>" + "CONGRATULATIONS 2016 CUBS") ;
			clock.stop();
		}

    console.log(correctAnswers);


	});

});	



	








//	$choices.html(questionsArray[i++].choices);




	

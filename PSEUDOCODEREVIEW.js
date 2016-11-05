$(document).ready(function(){
	//variables
	var game = {}		//variables first and then control flow
	var count = 0;
	var hello = "word";

	startGame();
		
	function startGame (){   //functions underneath parsing means going line by line
		var hasWon = false;

		for (var i = Things.length -1; 9 >=0; i --) {
			checkAnswers(things[i]);
		}


	}

	function checkAnswers(argument){
		//body
	}
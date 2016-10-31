
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
		console.log(converted);
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

window.onload = function(){
	$('#start').on('click', clock.start);

};
/////////////////////////////////////////////////////////////////////////////////////////

//trivia object 
var

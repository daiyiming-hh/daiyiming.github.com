function Timer() {
	var layout = document.getElementById("div_timer");
	var startTimeStamp = 0;
	var timer = null;
	var time = 0;

	var getTime = function(time) {
		var seconds = parseInt(time / 1000 % 60);
		var minutes = parseInt(time / 1000 / 60);

		return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)
	}

	var setTime = function(time) {
		layout.innerHTML = getTime(time);
	};

	this.start = function() {
		startTimeStamp = new Date().getTime();
		layout.innerHTML = "00:00";
		timer = setInterval(function() {
			setTime(time = new Date().getTime() - startTimeStamp);
		}, 1000);
	}

	this.restart = function() {
		startTimeStamp = new Date().getTime() - time;
		timer = setInterval(function() {
			setTime(time = new Date().getTime() - startTimeStamp);
		}, 1000);
	
	}

	this.stop = function() {
		clearInterval(timer);
		return getTime(time = new Date().getTime() - startTimeStamp);
	}
}
function getTime() {
	var today = new Date();
	var time =
		today.getHours() + ':' + today.getMinutes() + ':' + ("0" + today.getSeconds;
	document.getElementById('currentTime').innerHTML = time;
}

setInterval(getTime, 1000);

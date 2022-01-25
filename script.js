function getTime() {
	var today = new Date();
	var time =
		today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	document.getElementById('currentTime').innerHTML = time;
}

setInterval(getTime, 1000);

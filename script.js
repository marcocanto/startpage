function getTime() {
	var today = new Date();
	var time =
		today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	document.getElementById('currentTime').innerHTML = time;
}

setInterval(getTime, 1000);

function processSearch() {
	const query = document.querySelector('#search').value;
	const split = query.split(' ');
	const prefix = split[0];
	split.shift();
	search = split.join('+');
	console.log(prefix);
	switch (prefix) {
		case '-g': // search with google
			location.assign('https://www.google.com/search?q=' + search);
			break;
		case '-r':
			location.assign(
				'https://www.google.com/search?q=' +
					search +
					" site%3A'reddit.com'"
			);
			break;
		case 'r/':
			location.assign('https://www.reddit.com/r/' + search);
			break;
		case '-a':
			location.assign('https://www.amazon.com/s?k=' + search);
			break;
		case '-yt':
			location.assign(
				'https://www.youtube.com/results?search_query=' + search
			);
			break;
		default:
			location.assign('https://duckduckgo.com/?q=' + search);
	}
}

const query = document.querySelector('#search-box');

query.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		console.log();
		processSearch();
	}
});

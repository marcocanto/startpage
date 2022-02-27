const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function getTime() {
	const today = new Date();
	const time =
		today.getHours() +
		':' +
		('0' + today.getMinutes()).slice(-2) +
		':' +
		('0' + today.getSeconds()).slice(-2);
	const date =
		weekday[today.getDay()] +
		', ' +
		month[today.getMonth()] +
		' ' +
		today.getDate();

	document.getElementById('currentDate').innerHTML = date;
	document.getElementById('currentTime').innerHTML = time;
}

setInterval(getTime, 1000);

function success(position) {
	console.log(position.coords.latitude, position.coords.longitude);
}

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};

if (navigator.geolocation) {
	const curPos = navigator.geolocation.getCurrentPosition(
		success,
		null,
		options
	);
}

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
			location.assign('https://duckduckgo.com/?q=' + query);
	}
}

const query = document.querySelector('#search-box');

query.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		console.log();
		processSearch();
	}
});

function getQuote() {
	const quote = document.querySelector('#quote-body');
	const author = document.querySelector('#author');
	fetch('https://stoicquotesapi.com/v1/api/quotes/random')
		.then((response) => response.json())
		.then((data) => {
			author.innerHTML = ` - ${data.author}`;
			quote.innerHTML = `"${data.body}"`;
			console.log(data.author);
		});
}

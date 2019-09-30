/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*It creates an app that displays random famous quotes each time the "Show another quote" button is clicked.
  The event listener below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.*/

var quotes = [{
		quote: 'Either I will find a way, or I will make one.',
		source: 'Philip Sidney'
	},
	{
		quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
		source: 'Thomas A. Edison'
	},
	{
		quote: 'If you can dream it, you can do it.',
		source: 'Walt Disney'
	},
	{
		quote: 'Your focus determines your reality.',
		source: 'Qui Gon Jinn',
		citation: 'Ep I - The Phantom Menace',
		year: 1999
	},
	{
		quote: 'Though this be madness, yet there is method in it.',
		source: 'Shakespeare\'s Hamlet',
		year: 1602
	},
	{
		quote: 'Our lives are defined by opportunities, even the ones we miss.',
		source: 'Benjamin Button'
	}
];


//Get the random number between 0 and the length of the array
function getRandomQuote() {
	return Math.floor(Math.random() * quotes.length);
}


//The function creates a string with random quotes and displays it in the div with id  'quote-box'
function printQuote() {
	var printRandom = getRandomQuote();
	var newRandom = quotes[printRandom];
	var listQuote = '';
	listQuote += '<p class="quote">' + newRandom.quote + '</p>';
	listQuote += '<p class="source">' + newRandom.source;
	if (newRandom.citation) {
		listQuote += '<span class="citation">' + newRandom.citation + '</span>';
	}
	if (newRandom.year) {
		listQuote += '<span class="year">' + newRandom.year + '</span>';
	}
	listQuote += '</p>';
	document.getElementById('quote-box').innerHTML = listQuote;
	getColors();

}

  
//Ends the interval for 30 seconds 
clearInterval(interval);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Gets random numbers to create rgb body background-colors
function getRandomColor() {
	return Math.floor(Math.random() * 256);
}

//Creates the colors for the background
function getColors() {
	var bgColor = 'rgb(';
	bgColor += getRandomColor() + ',';
	bgColor += getRandomColor() + ',';
	bgColor += getRandomColor() + ')';
	document.body.style.background = bgColor;
}

//Sets the interval for 30 seconds
var interval = setInterval(printQuote, 30000);






























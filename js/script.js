/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
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
	source: 'Thomas A. Edison',
	tag: 'Wisdom'
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
	source: 'Benjamin Button',
	tag: 'Wisdom'
}
];


/*Get the random number between 0 and the length of the array
The function will return the quotes array*/
function getRandomQuote() {
var newRandom = Math.floor(Math.random() * quotes.length);
return quotes[newRandom];

}


//The function creates a string with random quotes and displays it in the div with id  'quote-box'
function printQuote() {
var printRandom = getRandomQuote();
var listQuote = '';
listQuote += '<p class="quote">' + printRandom.quote + '</p>';
listQuote += '<p class="source">' + printRandom.source;
if (printRandom.citation) {
	listQuote += '<span class="citation">' + printRandom.citation + '</span>';
}
if (printRandom.year) {
	listQuote += '<span class="year">' + printRandom.year + '</span>';
}
if (printRandom.tag) {
	listQuote += '<span class="tag">' + printRandom.tag + '</span>';
}
listQuote += '</p>';
document.getElementById('quote-box').innerHTML = listQuote;
getColors();

}


//clears the timer interval when button is pressed and then reset the timer again  
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

//Sets the interval to change the quote every 20 seconds
var interval = setInterval(printQuote, 20000);
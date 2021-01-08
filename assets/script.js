function addWords() {
	removeHighlight();

	var words = ["Wrong",
	"Win/Winning",
	"Space Force",
	"Fake News",
	"Stupid",
	"Weak",
	"Loser",
	"Smart",
	"Tough",
	"Dangerous",
	"Bad",
	"Bigly/Big League",
	"Lightweight",
	"Great Guy",
	"Amazing",
	"Huge",
	"Tremendous",
	"Terrific",
	"Zero",
	"Wrong",
	"Sad",
	"Rich",
	"The Left",
	"Out of Control",
	"Very, Very",
	"Many, Many",
	"Great, Great",
	"Beautiful",
	"Incredible",
	"Believe Me",
	"A Lot of Money",
	"We're going to take care of...",
	"It'll be handled / We'll handle it",
	"Millions and Millions",
	"Billions and Billions",
	"Make America Great Again",
	"Build the Wall",
	"China",
	"Mexico",
	"Many People",
	"Total Disaster",
	"Hillary Clinton",
	"Nancy Pelosi",
	"Russia",
	"No Collusion",
	"No Obstruction",
	"Witch Hunt",
	"Electoral College",
	"Landslide",
	"Nobody Thought We Could Win",
	"Lying Press",
	"The Crooked Media",
	"Alt-Left",
	"I Don't Know",
	"Nobody Knew",
	"You Have No Idea",
	"You Tell Me",
	"What About?",
	"Witch Hunt",
	"Rocket Man",
	"Deep State",
	"MS-13",
	"Animals",
	"FBI"];

	for(i = 0; i < 24; i++) {
		var x = document.querySelectorAll('.squares');
		var randWord = words[Math.floor(Math.random() * words.length)];

		x[i].innerHTML = '<p id="wordling'+ [i] + '" onclick="highlight()">' + randWord + '</p>';
		var wordIndex = words.indexOf(randWord);

		words.splice(wordIndex, 1);
	}

}

addWords();

function highlight() {
	var squares = document.querySelectorAll('.squares');

	squares.forEach(function(elem) {
	    elem.addEventListener("click", function(e){
    		this.classList.add('active');
		});

		if(elem.classList.contains('active')) {
	  		elem.addEventListener("click", function(e){
	      		this.classList.remove('active');
	  		});
		}
	});
}

function removeHighlight() {
	var squares = document.querySelectorAll('.squares');

	for (var i = 0; i < squares.length; i++) {
	  squares[i].classList.remove('active');
	}
}

highlight();
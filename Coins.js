let coinCount = 0;
let coin1 = [];
let coin2 = [];
let highscoreTemp = [0, 0, 0];

// initial position of coins
function iCoinPosition() {
	for (let c = 0; c < 49; c++) {
		coin1[c] = {
			x: random(platforms1[c].left + 40, platforms1[c].right - 40),
			y: 60,
			collected: false
		} ;

		coin2[c] = {
			x: random(platforms2[c + 1].left - 40, platforms2[c].right + 40),
			y: 360,
			collected: false
		} ;
	}	
}

function drawCoin(coin) {
	for (let c = 0; c < 49; c ++) {
		if (!coin[c].collected) {
			fill("rgb(255,217,0)");
			circle(coin[c].x, coin[c].y, 30);
			
			textAlign(CENTER, CENTER);
			fill(0);
			textSize(16);
			text("$", coin[c].x, coin[c].y);
		}
		
		coin[c].x -= platSpeed;
		
		rectMode(CENTER);
		fill("rgb(197,231,197)");
		rect(60, height - 40, 70, 30);
		fill(0);
		textSize(16);
		textAlign(CENTER);
		text("Coins:" + " " + coinCount, 60, height - 40);
	}
}


// best use of hit testing (circles)
// best use of sound 2 of 3
function coinHitTest(coin) {
	for (let c = 0; c < 49; c++) {
		if (((dist(mouseX, mouseY, coin[c].x, coin[c].y) || dist(pmouseX, pmouseY, coin[c].x, coin[c].y)) <= 15) && !coin[c].collected) {
			coin[c].collected = true;
			coinCount += 1;
			coinSound.play();
			return;
		}
	}	
}


function highScore(level) {
	if (level.selected) {
		if (coinCount > level.highscore) {
			level.highscore = coinCount;
		}
	}
}

// holds highscore in a temporary array so that when button values
// are reset, they can the be initialized with the correct values after
function updateHighscore() {
	highscoreTemp[0] = difficulty.easy.highscore;
	highscoreTemp[1] = difficulty.medium.highscore;
	highscoreTemp[2] = difficulty.hard.highscore;
}

// set highscore value after a reset
function iHighScore() {
	difficulty.easy.highscore = highscoreTemp[0];
	difficulty.medium.highscore = highscoreTemp[1];
	difficulty.hard.highscore = highscoreTemp[2];
}

function drawHighscore(level) {
	if (level.selected) {
		fill(0);
		textSize(20);
		text("Coins:" + " " + coinCount, width / 2, height / 2 + 10);
		text("Highscore:" + " " + level.highscore, width / 2, height / 2 + 40);
	}
}

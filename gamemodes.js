let loss = false;
let win = false;
let musicStart = false;
let musicPlaying = false;
let gameRunning = false;

// best use of user defined function
function gmSinglePlayer() {
	background("rgb(142,142,193)"); 
	
	// sky image insert
	imageMode(CENTER);
	skyline();
	
	
	// platforms mechanics
	// draws the two lvls of platforms.  
	for (let i = 0; i < platforms1.length; i++) {
		drawPlatform(platforms1[i]);
		drawPlatform(platforms2[i]);
		
		drawChains(platforms1[i]); // chains image 
		drawBuilding(platforms2[i]); // building image drawn on top of the platform
	}
		
	movePlatforms(); // controls platform movement
	
	drawCoin(coin1); // draws top set of coins
	drawCoin(coin2); // draws bottom set of coins
	
	// keeping track of highscore
	highScore(difficulty.easy);
	highScore(difficulty.medium);
	highScore(difficulty.hard);
	updateHighscore();
	
	if (!difficulty.easy.selected) {
		birdAnimation();
	}
	
	// runner mechanic
	runnerOrientation();
	contactCheck();
	gravitationalPull();
	
	
	// win condition
	drawFlag();
	if (contact && runnerX >= platforms1[platforms1.length - 1].x + 80) {
		win = true;
		winScreen();
		noLoop();
		gameSoundTrack.stop();
	} 
	
	// loss condition
	if (runnerY > height + 70 || runnerY < 0 - 70 || runnerX <= -10) {
		loss = true;
		lossScreen();
		noLoop();
		gameSoundTrack.stop();
	}
}

// rests all relevant values altered during a run
function resetSP() {
	iPlatformPosition();
	iCoinPosition();
	iBirdPosition();
	
	runnerX = 600 / 2;
	runnerY = 253;
		
	runnerBorder = {
		up: runnerY - 35 + 10,
		down: runnerY + 35,
		left: runnerX - 35 + 10,
		right: runnerX + 35 - 10
	}
	
	gravity = true;
	musicPlaying = false;
	gameRunning = false;
	loss = false;
	win = false;
	coinCount = 0;
}

// difficulty modes  setting initial value for certain variables
function easyMode() {
	platSpeed = 2;
}

function mediumMode() {
	platSpeed = 5;
	birdPush = 4;
}

function hardMode() {
	platSpeed = 7;
	birdPush = 6;
}



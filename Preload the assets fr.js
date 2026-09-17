let gameSoundTrack;
let imgStartScreen;
let imgTutorial;
let coinSound;
let hawkSound;

function preload() {
	// runner mechanics assets 
	runner[0] = loadImage("cRunner1.png");
	runner[1] = loadImage("cRunner2.png");
	runner[2] = loadImage("cRunner3.png");
	runner[3] = loadImage("cRunner4.png");
	runner[4] = loadImage("cRunner5.png");
	runner[5] = loadImage("cRunner6.png");
	runner[6] = loadImage("cRunner7.png");
	runner[7] = loadImage("cRunner8.png");
	runner[8] = loadImage("cRunner9.png");
	runner[9] = loadImage("cRunner10.png");
	runner[10] = loadImage("cRunner11.png");
	runner[11] = loadImage("cRunner12.png");
	
	runnerFlip[0] = loadImage("cRunnerFlipped1.png");
	runnerFlip[1] = loadImage("cRunnerFlipped2.png");
	runnerFlip[2] = loadImage("cRunnerFlipped3.png");
	runnerFlip[3] = loadImage("cRunnerFlipped4.png");
	runnerFlip[4] = loadImage("cRunnerFlipped5.png");
	runnerFlip[5] = loadImage("cRunnerFlipped6.png");
	runnerFlip[6] = loadImage("cRunnerFlipped7.png");
	runnerFlip[7] = loadImage("cRunnerFlipped8.png");
	runnerFlip[8] = loadImage("cRunnerFlipped9.png");
	runnerFlip[9] = loadImage("cRunnerFlipped10.png");
	runnerFlip[10] = loadImage("cRunnerFlipped11.png");
	runnerFlip[11] = loadImage("cRunnerFlipped12.png");
	
	sky = loadImage("background skyline.jpg");
	building = loadImage("Building.jpg");
	hanging = loadImage("HangPlat.png");
	finishFlag = loadImage("Flag.png");
	
	imgStartScreen = loadImage("starting screen.png");
	imgTutorial = loadImage("how to play screen.png");
	
	gameSoundTrack = loadSound("music for my cs game.m4a");
	coinSound = loadSound("coin sound effect short.mov");
	hawkSound = loadSound("angry hawk.mp3");
}
// button variables
let singlePlayer;
let difficulty = {
	easy: 0,
	medium: 0,
	hard: 0
};
let start;
let tutorial;

let buttonWidth = 100;
let buttonHeight = 50;


// tutorial screen --------------
function tutorialScreen() {
	imageMode(CENTER);
	image(imgTutorial, width / 2, height / 2, width, height);
	textSize(12);
	text("Press m to return to main menu", width / 2 - 18, height / 2 - 25);
}

// start screen ---------------
function startScreen() {
	background(142, 142, 194);
	imageMode(CENTER);
	image(imgStartScreen, width / 2, height / 2, width, height);

	textSize(12);
	fill(0);
	textAlign(CENTER);
	text("Select your Game Mode and Difficulty!", width / 2, 165);
	
	drawButton(singlePlayer);
	drawButton(difficulty.easy);
	drawButton(difficulty.medium);
	drawButton(difficulty.hard);
	drawButton(start);
	drawSign(); // tutorial sign
	
	// two dificulties cant be selected at the same time
	if (difficulty.easy.selected) {
		difficulty.medium.selected = false;
		difficulty.hard.selected = false;
	} 
	
	if (difficulty.medium.selected) {
		difficulty.easy.selected = false;
		difficulty.hard.selected = false;
	} 
	
	if (difficulty.hard.selected) {
		difficulty.easy.selected = false;
		difficulty.medium.selected = false;
	}
}

// loss screen -----------------------
function lossScreen() {
	background(266, 101, 0);
	textAlign(CENTER);
	textSize(72);
	fill(0);
	text("You lose :(", width / 2, height / 2 - 60);
	textSize(20);
	text("Press m to return to main menu", width / 2, height / 2 + 70);
	
	// highscore text based on gamemode selected
	drawHighscore(difficulty.easy);
	drawHighscore(difficulty.medium);
	drawHighscore(difficulty.hard);
	
	noLoop();
}

// win screen ------------------------
function winScreen() {
	background("rgb(127,212,127)");
	textAlign(CENTER);
	textSize(72);
	fill(0);
	text("You win! :D", width / 2, height / 2 - 60);
	textSize(20);
	text("Press m to return to main menu", width / 2, height / 2 + 70);
	
	// highscore text based on gamemode selected
	drawHighscore(difficulty.easy);
	drawHighscore(difficulty.medium);
	drawHighscore(difficulty.hard);
}

// main menu screen -> resets the values of everything and returns to start screen
function mainMenu() {
	if (key === 'm' && (loss || win || tutorial.selected)) {
		resetSP();
		iButtonPosition();
		iHighScore();  
		startScreen();
		loop();
	}
}

// button making ----------------------------
function makeButton(x, y, label, colour) {
	let button = {
		x: x,
		y: y,
		label: label,
		selected: false,
		colour: colour,
		highscore: 0
	} ;
	return button;
}

// best use of Drawing shapes etc 1 of 2
function drawButton(b) {
	rectMode(CENTER);
	
	if (b.selected) {
		fill("green");
	} else {
		fill(b.colour);
	}
	
	if (buttonHitTest(b)) {
		stroke(0);
		strokeWeight(10);
	} else {
		stroke(0);
		strokeWeight(1);
	}
	
	rect(b.x, b.y, buttonWidth, buttonHeight, 10);
	fill(0);
	noStroke();
	textSize(15);
	textAlign(CENTER, CENTER);
	text(b.label, b.x, b.y);
}

// initial positions, values etc of buttons
function iButtonPosition() {
	singlePlayer = makeButton(width / 2, height / 2, "Single Player", "rgb(227,72,246)");
	difficulty.easy =  makeButton(width / 2 - 120, height / 2 + 70, "Easy", "rgb(125,212,217)");
	difficulty.medium = makeButton(width / 2, height / 2 + 70, "Medium", "rgb(223,158,49)");
	difficulty.hard = makeButton(width / 2 + 120, height / 2 + 70, "Hard", "rgb(227,0,0)");
	start = makeButton(width / 2, height / 2 + 140, "Start", "rgb(167,95,193)");
	tutorial = makeButton(width - 90, height - 250, "Tutorial", "rgb(231,199,127)");
}

// checks if the mouse is over the button area
function buttonHitTest(button) {
	return (mouseX <= button.x + buttonWidth / 2 && mouseX >= button.x - buttonWidth / 2 && mouseY <= button.y + buttonHeight / 2 && mouseY >= button.y - buttonHeight / 2);
}

// toggles button object's selection value 
function buttonSelectionCheck(b) {
	if (buttonHitTest(b)) {
		b.selected = !b.selected;
	}
}

// Placed in mousePressed(); so that it can selection Test all buttons at once
function buttonSelection() {
	buttonSelectionCheck(singlePlayer);
	buttonSelectionCheck(difficulty.easy);
	buttonSelectionCheck(difficulty.medium);
	buttonSelectionCheck(difficulty.hard);
	buttonSelectionCheck(start);
	buttonSelectionCheck(tutorial); // need to keep this cuz this does hit test
}

// draws the little sign that the words "How to play" are on
// highlights as if it were a button 
function drawSign() {
	if (buttonHitTest(tutorial)) {
		strokeWeight(5);
	} else {
		strokeWeight(1);
	}
	
	rectMode(CENTER);
	stroke(0);
	line(width - 90, height - 250, width - 90, height - 208);
	fill("rgb(220,181,88)");
	rect(width - 90, height - 250, 75, 35);
	
	noStroke();
	textSize(12);
	textAlign(CENTER, CENTER);
	fill(0);
	text("How to play", width - 90, height - 250);
}
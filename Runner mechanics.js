// global variables 
let runner = [];
let runnerFlip = [];
let frameToShow = 0;
let ar; // runner aspect ratio

let gravity = true;

let runnerX = 600 / 2;
let runnerY = 253;
let runnerSize = 70;
 
let runnerBorder = {
		up: runnerY - 35 + 10,
		down: runnerY + 35,
		left: runnerX - 35 + 10,
		right: runnerX + 35 - 10
	};

let contact;

// ----------------------------------------------------------
function runnerOrientation() {
	if (gravity) {
			drawRunner();
	} else {
		drawRunnerFlipped();
	}
}

// best use of Loading and Displaying images
function drawRunner() {
	imageMode(CENTER);
	image(runner[frameToShow], runnerX, runnerY, ar * runnerSize, runnerSize);
	
	if (frameCount % 2 === 0) {
		frameToShow += 1;
	}
	
	if (frameToShow >= runner.length) {
		frameToShow = 0;
	}
}

function drawRunnerFlipped() {
	imageMode(CENTER);
	image(runnerFlip[frameToShow], runnerX, runnerY, ar * runnerSize, runnerSize);
	
	if (frameCount % 2 === 0) {
		frameToShow += 1;
	}
	
	if (frameToShow >= runner.length) {
		frameToShow = 0;
	}
}

// best use of Conditionals
// best use of Loops
// best use of Objects
function contactCheck() {
	contact = false;
	
	for (let c = 0; c < platforms2.length; c++) {
		if (gravity && runnerBorder.down >= platforms2[c].top && runnerBorder.left < platforms2[c].right && runnerBorder.right > platforms2[c].left && runnerBorder.up <= platforms2[c].top - 59) {
			contact = true;
			return contact;
		} else if (!gravity && runnerBorder.up <= platforms1[c].bottom && runnerBorder.left < platforms1[c].right && runnerBorder.right > platforms1[c].left && runnerBorder.down >= platforms1[c].bottom + 50) {
			contact = true;
			return contact;
		}
	} 
}

// best use of Hit Testing (rectangles)
function gravitationalPull() {
	if (gravity && !contact) {
		runnerY += 9.8;
		runnerBorder.up += 9.8;
		runnerBorder.down += 9.8;
	} else if (!gravity && !contact) {
		runnerY -= 9.8;
		runnerBorder.up -= 9.8;
		runnerBorder.down -= 9.8;
	}
}










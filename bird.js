let birdX;
let birdY;
let bird = [];
let birdFrames = 0;
let birdPush;

function iBirdPosition() {
	birdX = 850;
	birdY = 500 / 2;
	bird[0] = createBird(20, 10);
	bird[1] = createBird(-20, -20);
}

function createBird(lW, rW) {
	let bird = {
		leftWingPos: lW,
		rightWingPos: rW
	};
	return bird;
}

function birdAnimation() {
	drawBird(bird[birdFrames], birdX, birdY);
	
	if (frameCount % 15 === 0) {
		birdFrames += 1
	}
	if (birdFrames >= bird.length) {
		birdFrames = 0;
	}
	
	birdX -= 10;
	
	if (birdX <= - 30) {
		birdX = width + 600;
		birdY = floor(random(100, 300));
	}
	
	birdHitTest();
}

// best use for Drawing shapes etc 2 of 2
function drawBird(bird, x, y) {
	noStroke();
	rectMode(CENTER);
	
	fill(150, 150, 150);
	triangle(x - 5, y, x + 5, y, x - 20, y + bird.rightWingPos);// right wing
	
	fill(0);
	rect(x, y, 20, 10);
	ellipse(x, y + 5, 20, 15);
	circle(x - 15, y - 5, 15);
	
	fill(150, 150, 150);
	triangle(x - 5, y, x + 5, y, x + 20, y + bird.leftWingPos); // left wing
}

// best use of sound 3 of 3
function birdHitTest() {
	if (runnerBorder.right >= birdX - 20 && runnerBorder.right <= birdX + 20 && runnerY >= birdY - 30 && runnerY <= birdY + 30) {
		runnerX -= birdPush;
		runnerBorder.right -= birdPush;
		runnerBorder.left -= birdPush;
		
		hawkSound.pause(); // prevents stuttering on sequential hits
		hawkSound.play();
	}
}

let sky; // sky img
let skyX1;
let skyX2;

function iSkylinePosition() {
	skyX1 = 0;
	skyX2 = width;
}

// Draws 2 skyline images. Moves them slightly. If one is fully off screen
// then it is relocated to otherside. Makes the image look endless
function skyline() {
	imageMode(CENTER);
	image(sky, skyX1, height / 2, width, height); // first skyline picture
	image(sky, skyX2, height / 2, width, height); // second skyline picture
	
	skyX1 -= 0.5;
	skyX2 -= 0.5;
	
	if (skyX1 + width / 2 <= 0) {
		skyX1 = width + width / 2;
	}
	
	if (skyX2 + width / 2 <= 0) {
		skyX2 = width + width / 2;
	}
}
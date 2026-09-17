// global variables 
let platforms1 = []; // top lvl of platforms
let platforms2 = []; // bottom lvl of platforms

let platSpeed = 2; // is changed based on the difficulty lvl

let building; // building img
let hanging; // hanging plat img
let finishFlag; // finish line img

// best use of Arrays
// initial position of platforms
function iPlatformPosition() {
	platforms1[0] = createPlatform(630, 100, 300, 25); // first top plat
	platforms2[0] = createPlatform(400, 300, 300, 25); // first bottom plat
	
	for (i = 1; i < 50; i++) {
		platforms1[i] = createPlatform(platforms1[i - 1].right + 300, 100, 300, 25);
		platforms2[i] = createPlatform(platforms2[i - 1].right + 300, 300, 300, 25);
	}
}


function createPlatform(platX, platY, platWidth, platHeight) {
	let platform = {
		x: platX,
		y: platY,
		w: platWidth,
		h: platHeight,
		bottom: platY + platHeight / 2,
		top: platY - platHeight / 2,
		left: platX - platWidth / 2,
		right: platX + platWidth / 2
	} ;
	return platform;
}


function drawPlatform(p) {
	rectMode(CENTER);
	strokeWeight(1);
	fill("green");
	rect(p.x, p.y, p.w, p.h); // the green place holder plat
}

function drawBuilding(p) {
	imageMode(CORNER);
	image(building, p.left, p.top);
}

function drawChains(p) {
	// the chains for the top platforms
	imageMode(CORNER);
	image(hanging, p.left - 5, -12, 310, 125);
}

function drawFlag() {
	imageMode(CORNER);
	image(finishFlag, platforms1[platforms1.length - 1].x + 80, 112.5, 75, 75);
}

function movePlatforms() {
	for (let i = 0; i < platforms1.length; i++) {
		platforms1[i].x -= platSpeed ;
		platforms1[i].left -= platSpeed;
		platforms1[i].right -= platSpeed;
		
		platforms2[i].x -= platSpeed ;
		platforms2[i].left -= platSpeed;
		platforms2[i].right -= platSpeed;
	}
}




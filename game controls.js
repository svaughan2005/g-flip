function pausePlay() {
	if (key === 'p') {
		noLoop();
		gameSoundTrack.pause();
	} else if (key === 'r') {
		loop();
		gameSoundTrack.loop();
	}
}

function flipGravity() {
	if (key === ' ' && contact) {
		gravity = !gravity;
	}
}

// best use of Sound 1 of 3
function soundTrack() {
	if (!musicPlaying && singlePlayer.selected && start.selected && (difficulty.easy.selected || difficulty.medium.selected || difficulty.hard.selected)) {
		gameSoundTrack.loop();
		musicPlaying = true;
	}
}

function gaming() {
	if ((singlePlayer.selected && start.selected && (difficulty.easy.selected || difficulty.medium.selected || difficulty.hard.selected)) || tutorial.selected) {
		gameRunning = true;
	} else {
		gameRunning = false;
	} 
	return gameRunning;
}
// README
/*
<project>
Shannon Vaughan 
svaughan

INSTRUCTIONS
<explain what your program does and how to use it>
This is a 2D platforer game where the player must help their character, Axel, navigate
the rooftops of a big city. 
The catch is that Axel is wearing gravity flipping boots, and so he can either run
rightside up on the rooftops or upside down on the hanging platforms. 

On the more difficult game settings (medium and hard), the player must also help Axel
avoid being hit bit birds.
If he collides with the birds, they scream and push him backwards slightly.

Win / Loss Conditions:
If Axel falls off the screen (whether up or down) or gets pushed off the screen
then the player loses.
If the player can reach the end of all 100 platforms without falling, they win! 

The highscore counter displayed on both the win and loss screen motivates players
to collect coins during their playthrough in order to beat it. 
The highscore values per difficulty level are stored seperately in the code memory. 
(unless of course you refresh the page / code).

Game Controls: 
"space bar" - flip the gravity 
"left click" - collect coins 

'p' - pause 
'r' - resume
'm' - return to main menu, but only on certain screens
"left click" - select buttons on certain screens

VIDEO
https://youtu.be/8T8gUvlmrhY


RELEASE
I Shannon Vaughan grant permission to CS105 course staff to use
my Final Project program and video for the purpose of promoting CS105.
<if you don't grant permission, erase the line above>



BASIC CONCEPTS
<List the best examples of the "Basic Concepts" used in the Final Project with a brief description of how/where each is used>
Drawing shapes and using drawing attributes:
	Best use: "Bird" tab or "Game Screens" tab
	Explanation: "Bird" tab - Used the given shape functions to create a bird and animated it flying across the screen, attacking the
							player. If the player hits into this bird, they are pushed backwards.
							"Game Screens" tab - created buttons. Buttons have different fill colours and stroke weights dependent on whether they
							are selected, being hovered over or deselected entirely. 
	
Conditionals
	Best use: on the "Runner Mechanics tab" under contactCheck(); 
	Explanation: Used to test whether or not the character was touching the top or bottom 
							of a platform in the platforms array. This then determined whether "gravity" 
							would drag them off the screen, or make them stop on top of the platform.
																			
User-defined functions
	Best use: Significant use throughout 
	Explanation: Used to avoid duplicate code. For example, when creating different screens on the 
							"Game Screens tab", I created various functions like startScreen();, lossScreen();,
							winScreen(); and tutorialScreen(); to handle what the canvas should look like during 
							specific points in the game/code.

Loops
	Best use: Combined with conditionals use on the "Runner Mechanics" tab under contactCheck();
	Explanation: Essentially, the code wants to know if the runner is on any given platform. However,
							there are 50 platforms per platform array. Therefore to do this, it checks if the runner
							is between the left most and right most values of a platform, as well as above / below 
							a certain y value (to account for head height, falling out of world etc). 
							If the runner does not satisfy the conditions for this platform, the code then tests it 
							for the next platform in the array.
							It does this until it finds a match, and then returns.
	
	
Arrays
	Best use: Containing the information for the 2 different levels of platforms. "Platforms mechanics tab": platforms1 and platforms2.
	Explanation: platforms1 and platforms2 are arrays of platform objects. These arrays are the backbone for the entire 
							gameplay section of the game. They allows the code to instantly initialize the beginning position of
							all of the platforms, perform the contact check, make the platforms move and control the position of the end flag
							among other things.
	
Mouse and keyboard interaction -
	Best use: "Game Controls" tab and "Final Edit Tab" in tandem
	Explanation: Controls player movement, coin collection, sound effects and menu navigation/ button selection

EXTENDED CONCEPTS
<List the "Extended Concepts" used in the Final Project with a brief description of how/where each is used>

Objects
	Best use: "Platforms Mechanics" tab in conjunction with "Runner Mechanics" tab
	Explanation: For the platform, the object holds information about its x & y values, its width & height, as
						well as its top, bottom, left and right borders. All 100 platform objects are held in 2 arrays (50 each).
						Used in conjunction with the "runnerBorder" object which houses similar information for the runner, it 
						allows the program to perform various tasks. Most notably, the contact check.
						
Rectangle and circle hit testing:
	Best use: - Rectangle hit testing the runner with the platforms 
						- Circle hit testing the coins
	Explanation: As mentioned earlier, on the "Runner Mechanics" tab under the contactCheck(); a rectangle hit test 
							is performed to determine whether or not the runner is on top of / below the respective platforms (based on gravity orientation)
							
							For circl hit testing, it is used on the "Coins" tab under coinHitTest(coin)(); to determine whether or not
							the player successfully clicked on a coin.
							If they did, the coin will disappear, the coin count will go up and a sound effect will play.
							
Loading and Displaying images 
	Best use: The animation of the runner 
	Explanation: In the "Preload the assets" tab, 12 up right and 12 upside down runner images are preloaded and store in an array. 
							as the game runs, the code cycles through the array of pictures such that it looks like the character is actually running.
							When the gravity is flipped (space bar is pressed), the code cycles through the other array so that it looks like the
							character is running upside down. 
	
Sound
	Best use: Soundtrack for game and sound effects for coin & bird
	Explanation: When the game is running, the custom mad soundtrack can be heard. When the game is paused, the music pauses.
							When the game resumes, the music resumes from where it left off. When you die, return to main menu and start a new game,
							the music starts over.
							When you hit into a bird, the bird sound effect plays without stuttering.
							When you collect a coin, the coin sound effect plays.
							

CODING QUALITY AND VISUAL DESIGN
<argue for your coding quality and visual design>
	This was a solo effort by a person who cannot draw very well, has questionable timemanagement skills and is drowning in work
	from other classes. All of that considered, I believe the game looks really good.
	
	The main menu, tutorial screen, single player backdrop and character were all made by me in Adobe Illustrator (trying to put this semester of
	GBDA knowledge to use). 
	The hanging platforms and moving foreground buildings were made by me in Adobe Fresco - a program I had never heard of before attempting
	to polish up the aesthetics of my game a few days ago.
	
	The bird is made entirely from shapes native to OpenProcessing.org and is controlled in such a way that it looks like it is flying
	across the screen.
	
	I made the soundtrack for the game in garage band with no formal composition experience.
	
	Backdrop of single player mode moves smoothly and connects seemlessly.

	Interms of coding quality:
	I believe there are no bugs. (Minus the fact that it won't open on safari but is fine on google)
	No crashes have been experienced.
	Paid special attention to things such as making sure the player could only jump if touching the platorms; hitting into the bird multiple
	times in a row doesn't spam the sound effect; buttons can't accidentally be pressed on screens they are not meant to be present on.
	Code is sectioned into tabs, fairly well labeled and follow all other requirements that constitute good coding style.
	
	Again, I believe this to be a well polished effort from a singular person who can't draw very well. 
*/

// all code goes below here ....

function setup() {
	// general setup
	createCanvas(800, 500);
	background("rgb(142,142,193)");
	
	// platforms mechanics setup
	iPlatformPosition();
	
	// runners mechanics setup
	ar = runner[0].width / runner[0].height;
	
	// other important initial positions 
	iButtonPosition(); 
	iSkylinePosition();	
	iCoinPosition();	
	iBirdPosition();
}

function draw() {
	 startScreen();
	
	if (tutorial.selected) {
		tutorialScreen();
	}
	
// drawing the game based on difficulty selected	
	if (singlePlayer.selected && start.selected) {
		if (difficulty.easy.selected) {
			easyMode();
			gmSinglePlayer();
		} else if (difficulty.medium.selected) {
			mediumMode();
			gmSinglePlayer();
		} else if (difficulty.hard.selected) {
			hardMode();
			gmSinglePlayer();
		}
	} else {
		musicStart = false;
		musicPlaying = false;
		gameRunning = false;
	}
}

// best use of Keyboard and Mouse Interaction
function keyPressed() {
	flipGravity(); // flip grav with space
	pausePlay(); // pause or play with p or r respectively
	mainMenu(); // option to take player back to main menu after they lose (press m)
}

function mousePressed() {
// buttons only available if the game is not running	
	if (!gaming()) {
		buttonSelection();
	}
	
	soundTrack();
	coinHitTest(coin1);
	coinHitTest(coin2);
}
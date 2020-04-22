// Claire Camomile
// Points Breakdown:
// Track a high score that persists across scenes and display it in the UI (10)
// Allow the player to control the Rocket after it's fired (10)
// Display the time remaining (in seconds) on the screen (15)
// Create a new title screen (15)
// Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
// Implement a new timing/scoring mechanism that adds time to the clock for successful hits (25)

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    smallShipSpeed: 4,
    gameTimer: 60000    
}

// reserve from keyboard variables
let keyF, keyLEFT, keyRIGHT, highScore = 0;
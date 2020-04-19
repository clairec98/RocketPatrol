class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('stars', './assets/stars.png');
    }

    create() {
        // background
        this.stars = this.add.tileSprite(0, 0, 640, 480, 'stars').setOrigin(0,0);

        // menu display
        let titleConfig = {
            fontFamily: 'Georgia',
            fontSize: '48px',
            color: '#FCEE97',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '28px',
            color: '#FCEE97',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        let textSpacer = 64;

        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'spaceship', 0, 30).setOrigin(0, 0);
        this.add.text(centerX, centerY, 'Current High Score: ' + highScore, menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer * 3, 'ROCKET PATROL', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 1.5, 'Use ⟷ arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        menuConfig.color = '#FCEE97';
        this.add.text(centerX, centerY + textSpacer * 3, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        // high score variable
        highScore;
    }
    update() {
        this.ship01.update();

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            smallShipSpeed: 5,
            gameTimer: 60000,
            displayTimer: 60,   
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            smallShipSpeed: 6,
            gameTimer: 45000,
            displayTimer: 45, 
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
      
}
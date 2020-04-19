class SmallShip extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        // add an object to existing scene, displayList, updateList
        scene.add.existing(this);
        pointValue = 5;
        this.points = pointValue;
    }
    update(){
        // move spaceship left
        this.x -= game.settings.smallShipSpeed;
        // wraparound screen bounds
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }
    reset(){
        this.x = game.config.width;
    }
}
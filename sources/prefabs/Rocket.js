// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.sfxRocket = scene.sound.add('sfx_rocket');

        // add an object to existing scene, displayList, updateList
        scene.add.existing(this);
        // track rocket's firing status
        this.isFiring = false;
    }
    update(){
        // left/right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= 47){ // 0 + border width instead of 47
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 581){
                this.x += 2;
            }
        }
       
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired, move up and give user control to move rocket
        if(this.isFiring && this.y >= 108){
            this.y -= 2;
            if(keyLEFT.isDown && this.x >= 47){ 
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 581){
                this.x += 2;
            }
        }
        // reset on miss
       if(this.y <= 108){
           this.reset();
       } 
        
    }

    // reset function
    reset(){
        this.isFiring = false;
        this.y = 431;
        }
 }

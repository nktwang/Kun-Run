//Noctis Wang
//Kun Run
//1hours
//My game simulates a popular trend of a Chinese Singer, Dancer, and Rapper Kun.
//Reference: user3289402, et al. “Create a High Score in Phaser.” Stack Overflow, 1 Feb. 1963, https://stackoverflow.com/questions/37408825/create-a-high-score-in-phaser.
//My ARTG120 partner Steven Ren in this class helped me on the code by sitting aside and teaching us on questions about the code a bit. 
let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 700,
    scene: [ Menu, Instructions, Play, Credits],
    physics: {
        default:"arcade",
        arcade:{
            //debug:true
        }
    }
}
let game = new Phaser.Game(config);
let centerX = game.config.width/2;
let centerY = game.config.height/2;
// reserve keyboard vars
let keySPACE, keyENTER, keyLeft, keyRight, keyR, keyT;
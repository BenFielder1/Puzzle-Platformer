//importing Phaser library
import Phaser from "phaser"

//importing functions from other scripts
import { createNewButton, createNewText } from "./components/components"
import { checkButtonPress } from "./components/frame-events"

//functions to communicate with puppet scene
import { restartScene } from "../Game2"


//Creating the Minigame Menu scene. The create function is called at the start of the scene and the update function is called every frame
class MinigameMenu extends Phaser.Scene{
    constructor(){
        super("MinigameMenu")
    }
    preload(){
        //loading all the sprites for use in the scene
        this.load.spritesheet("ui-button", "/assets/ui-button/ui-button.png", {frameWidth: 190, frameHeight: 49})

        this.load.image("background", "/assets/background/grass.png")
    }
    create(){

        this.gameScale = this.scale.canvas.width/800

        this.add.sprite(512*this.gameScale, 300*this.gameScale, "background").setDisplaySize(1024*this.gameScale, 1024*this.gameScale).setDepth(-2)

        //Create the text for the title
        this.texts = this.add.group()
        this.titleText = createNewText(this, this.texts, {x:400,y:100}, this.gameScale, {text: "Choose Minigame", font: "50px Future", fill: "#552eff"})

        //create the buttons for the mingames
        this.buttons = this.add.group()
        this.starCollector = createNewButton(this, this.buttons, {x:400, y:250, w:300, h:50}, this.gameScale, {text:"Star Collector", font: "30px Future", fill: "#00ff00"}, 0xff0000, startStarCollector, this, "ui-button")
        this.football = createNewButton(this, this.buttons, {x:400, y:350, w:300, h:50}, this.gameScale, {text:"Football", font: "40px Future", fill: "#00ff00"}, 0xff0000, startFootball, this, "ui-button")

        //creating a back button to return to the main menu
        this.uiButtons = this.add.group()
        this.backButton = createNewButton(this, this.uiButtons, {x:600,y:500,w:150,h:50}, this.gameScale, {text:"Back", font: "40px Future", fill: "#00ff00"}, 0xff0000, returnToMenu, this, "ui-button")

        //restart the puppet scene and tell it not to run
        restartScene(false)
    }
    update(){
        //checks for button presses in the buttons group
        checkButtonPress(this, this.buttons)
        checkButtonPress(this, this.uiButtons)
    }
}

function startStarCollector(game){
    game.sound.stopAll()
    //start the star collector minigame scene
    game.scene.start("StarCollector")
}

function startFootball(game){
    game.sound.stopAll()
    //start the football minigame scene
    game.scene.start("Football")
}

function returnToMenu(game){
    //load the main menu
    game.scene.start("MainMenu")
}

export default MinigameMenu
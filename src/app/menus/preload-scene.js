//importing the phaser library
import Phaser from "phaser"

//The PreloadScene class. The use for this scene is to start the music and to load in the font.
class PreloadScene extends Phaser.Scene{
    constructor(){
        super("PreloadScene")
    }
    preload(){
        //loading in the song
        this.load.audio("worldmap", "/assets/music/worldmap.mp3")

        this.load.font("Future", "/assets/fonts/Kenney_Future_Narrow.ttf")
    }
    create(){
        //setting the music variable
        this.music = this.sound.add("worldmap")
        //starting the music
        this.music.play({loop:true})

        //starting the main menu
        this.scene.start("MainMenu")
    }
}

export default PreloadScene
//create platforms
export function createNewPlatforms(game, group, platformData, scale, sprite){
  let newPlatform
  if(sprite){
    for(let i = 0; i < platformData.length; i++){
      newPlatform = game.add.sprite(platformData[i].x*scale, platformData[i].y*scale, sprite)
      newPlatform.setDisplaySize(platformData[i].w*scale, platformData[i].h*scale)
      group.add(newPlatform)
    }
  }
  else{
    for(let i = 0; i < platformData.length; i++){
      newPlatform = game.add.rectangle(platformData[i].x*scale, platformData[i].y*scale, platformData[i].w*scale, platformData[i].h*scale, 0x00ff00)
      group.add(newPlatform)
    }
  }
}

//create the highscore text for the star collector minigame
export function createHighScoreText(game, group, info, count, scale){
  for(let i = 0; i < count; i++){
    group.add(game.add.text(info.x*scale, info.y+i*20*scale, "", {font: "16px Future", fill: "#ff0000"}))
  }
}

//create a new player
export function createNewPlayer(game, group, playerInfo, scale, sprite){
  let player
  //if the player has a team attached to it, attach it to this new player as well
  if(playerInfo.team){
    if(playerInfo.team === "red"){
      //red team players are displayed as red
      player = game.add.sprite(playerInfo.x*scale, playerInfo.y*scale, sprite).setTint(0xff0000).setDisplaySize(50*scale, 50*scale)
    }
    else{
      //blue team players are displayed as blue
      player = game.add.sprite(playerInfo.x*scale, playerInfo.y*scale, sprite).setTint(0x0000ff).setDisplaySize(50*scale, 50*scale)
    }
    player.team = playerInfo.team
  }
  else{
    //default player colour is red
    player = game.add.sprite(playerInfo.x*scale, playerInfo.y*scale, sprite).setDisplaySize(50*scale, 50*scale)
  }

  game.anims.create({
    key: "run",
    frames: [{key: "player1r"}, {key: "player2r"}],
    frameRate: 5,
    repeat: -1
  })
  game.anims.create({
    key: "rest",
    frames: [{key: "player"}],
    frameRate: 20
  })
  player.animation = "rest"

  player.playerId = playerInfo.playerId
  player.score = playerInfo.score
  player.name = playerInfo.name

  player.nameText = game.add.text(playerInfo.x*scale, (playerInfo-50)*scale, player.name, {font: "12px Future", fill: "#000000"}).setOrigin(0.5, 0.5)

  if(player.playerId === game.socket.id){
    game.player = player
    game.cameras.main.startFollow(player)
  }
  group.add(player)
}

//create a goal for the football minigame.
export function createNewGoal(game, group, info, scale, sprite, flip){
  let goal
  if(sprite){
    goal = game.add.sprite(info.x*scale, info.y*scale, sprite)
    goal.setDisplaySize(20*scale, 100*scale)
  }
  else{
    goal = game.add.rectangle(info.x*scale, info.y*scale, 20*scale, 100*scale, 0xffffff)
  }
  goal.flipX = flip
  group.add(goal)
  return goal
}
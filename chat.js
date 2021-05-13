class mainPart{
    getState(){
        var game = database.ref('gameState')
        game.on("value",function(data){
             game = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        player = new Player;
        player.getCount()
        var playerCountRef = await database.ref('playerCount').once("value")
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val()
            player.getCount()
        }
        content = new Content1;
        content.display1()
    }
    async start2(){
        var clickRef = await database.ref('Count').once("value")
        if(clickRef.exists()){
            Count = clickRef.val()
            player.getClick()
        }
    }
    play(){
        player.getPlayerInfo()
        if(allPlayers !== undefined){
          var positions = 100
          var index = 0
          for(var i in allPlayers){
              positions = positions+20
              index = index+1
              fill("black")
              textSize(20)
              text("The chat:",100,100)
              text(allPlayers[i].name+":"+allPlayers[i].answer,300,positions);    
          }
        }
    }

}
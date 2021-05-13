var canva;
var database;
var playerCount,gameState;
var allPlayers,player,content,Chat,Count;

function setup(){
  canvas = createCanvas(1170,900);
  database = firebase.database()
  Chat = new mainPart()
  Chat.getState()
  Chat.start()
  Chat.start2()
}


function draw(){
  background("pink");
   if(playerCount == 2){
   Chat.update(1)
  }
  
  if(gameState == 1){
    Chat.play()
  }
  drawSprites()
  fill("black")
  text("No. of people in the chat : "+Count,300,50)
}

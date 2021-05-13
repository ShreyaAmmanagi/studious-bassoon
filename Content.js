class Content1{
    constructor(){
     this.sent1 = createElement('h1')
     this.input = createInput('name')
     this.button = createButton('submit');

    }
    display1(){
      this.sent1.html('Welcome')
      this.sent1.position(50,20);
      this.input.position(50,100)
      this.button.position(50,200);
      this.button.mousePressed(()=>{
        this.sent3 = createElement('h3')
        this.sent3.position(100,50)
        this.sent3.html('*Send a message to join the chat*')
        Count = Count+1
        player.updateClick(Count)
        this.sent2 = createElement('h3')
        this.sent2.position(600,50)
          this.sent1.hide()
          this.input.hide()
          this.button.hide()
          player.name = this.input.value()
        this.sent2.html("your name - "+player.name)
         this.input2 = createInput('message')
          this.input2.position(100,200)
          this.button2 = createButton('send')
          this.button2.position(50,200)
          this.button2.mousePressed(()=>{
          player.answer = this.input2.value() 
          this.sent3.hide() 
          playerCount = playerCount+1         
          player.index = playerCount
          player.update()
          player.updateCount(playerCount)
          gameState = 1 
          Chat.update(1) 
          })
                 
      })
    }
}
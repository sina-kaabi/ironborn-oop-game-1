
      this.time = 0
      this.intervaId = null
      this.player = null
      this.obstacles = [] 
      this.health = 0;
     
      
createDomElement



class Player {
    constructor() {
        
        //rectangle shape to form snake
        this.health = health;
        this.width = 32;
        this.height = 8;
        this.positionX = 50;
        this.positionY = 0;
        
    }

    moveUp() {
    this.positionY++
    }

    moveDown() {
    this.positionY--
    }



}



class Obstacle {
    constructor() {
      this.width = 20;
      this.height = 10;
      this.positionX = 25; // random between 0 and (100-this.width)
      this.positionY = 50;
      this.domElement = null;
    }
    moveRight() {
      this.positionX++
    }

    moveLeft() {
        this.positionX--
    }
  }
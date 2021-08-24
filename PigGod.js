class PigGod extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("enemyGod.png");
      this.Visibility = 255;
    }
  
    display(){
  
      if(this.body.speed <25){
  
        super.display();
  
      }
      else{
  
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 10;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
  
      }
    }
    score(){

      if(this.Visibility <0 && this.Visibility >-7015){
  
        score++;
  
      }
  
    }
  }
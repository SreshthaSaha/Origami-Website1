class Umbrella{
   constructor(x,y){
     var options = {
         isStatic : true         
     }
     this.image = loadImage("walking_8.png");
     this.image.scale = 2;
     this.r = 900;
     this.body = Bodies.circle(x,y,this.r,options);
   }
   display(){
       var position = this.body.position;
    imageMode(CENTER);
    ellipse(this.x,this,this.r)
    image(this.image,position.x,position.y, this.r);
   }
}
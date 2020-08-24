class createDrop{
    constructor(x,y){
        var options ={
            restitution:4,
            isStatic : false
        }
        this.r = 5;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color("blue");
        World.add(world,this.body);
    }   
    reposition(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x: random(0,800),y: random(0,400)})
        }
    }    
    display(){

        var pos = this.body.position;
        // var angle = this.body.angles;

        // push();        
        // translate(pos.x,pos.y);
        // rotate(angle);
        // noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);      
        pop();

        }
};
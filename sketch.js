const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop = [];
var maxDrops = 100;
var umbrella;
var thunder;
var thunder1,hunder2,thunder3,thunder4;

function preload(){
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");   
}

function setup(){
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  umbrella = new Umbrella(300,500);
  
  if(frameCount%150 ===0){
    for(var i = 0 ; i<maxDrops ;i++){
    drop.push(new createDrop(random(0,800),random(0,400)));   
    }
  }
    //drop = new createDrop(200,20);

  Engine.run(engine);     
}

function draw(){
  background("black");

    //drop.display();
     Thunder();

     umbrella.display();

     for(var i = 0 ; i < maxDrops ;i++){
      drop[i].display();
      drop[i].reposition();
      
    }   

    drawSprites();    
} 
function Thunder() {
  if(frameCount%50 === 0){
    thunder = createSprite(250,100,50,50);
    thunder.scale = 0.6;
    thunder.lifetime = 20;
     var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunder.addImage(thunder1);
              break;
      case 2: thunder.addImage(thunder2);
              break;
      case 3: thunder.addImage(thunder3);
              break;
      case 4: thunder.addImage(thunder4);
              break;
       default: break;     
     }
   } 
  }


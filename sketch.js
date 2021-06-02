const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftRect, rightRect, bottomRect;
var myWorld,myEngine;

function setup() {
	createCanvas(1000, 400);

  myEngine = Engine.create();
	myWorld = myEngine.world;

  ball = new Ball(200,355,30);

	ground = new Ground(500,380,1000,20);
	
	leftRect = new Rect(680,331,20,100);
	rightRect = new Rect(880,331,20,100);
  bottomRect = new Rect(780,370,200,20);

  
}


function draw() {
  background("black");
  Engine.update(myEngine);

  drawSprites();
  ball.display();
  ground.display();
  leftRect.display();
  rightRect.display();
  bottomRect.display();
}

function keyPressed(){
   if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
   }
    

}

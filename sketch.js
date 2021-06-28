
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world,engine
var bob1,bob2,bob3,bob4,bob5,ground1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1400, 1000);


	engine = Engine.create();
	world = engine.world;
     
	//Create the Bodies Here.
bob1=new Bob(700,550)
bob2=new Bob(800,550)
bob3=new Bob(900,550)
bob4=new Bob(600,550)
bob5=new Bob(500,550)
ground1=new Ground(700,100,400,200)

rope1=new Rope(bob1.bub,{x:700,y:100})
rope2=new Rope(bob2.bub,{x:800,y:100})
rope3=new Rope(bob3.bub,{x:900,y:100})
rope4=new Rope(bob4.bub,{x:600,y:100})
rope5=new Rope(bob5.bub,{x:500,y:100})
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	Engine.update(engine);

 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  
}
function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob3.bub,bob3.bub.position,{x:150,y:150})
	}
}





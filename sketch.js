const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	roofObject=new roof(width/2,height/4,width/7,20)
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobDiameter=40
	bob1= new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2= new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3= new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4= new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5= new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rope1=new rope(bob1.body,roofObject.body,-bobDiameter*2,0)
rope2=new rope(bob2.body,roofObject.body,-bobDiameter*1,0)
rope3=new rope(bob3.body,roofObject.body,0,0)
rope4=new rope(bob4.body,roofObject.body,bobDiameter*1,0)
rope5=new rope(bob5.body,roofObject.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  roofObject.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob.body, bob.body.position,{x:85});
    
  	}
}


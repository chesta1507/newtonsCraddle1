
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+200;

	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(startBobPositionX-bobDiameter*2 , startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter , startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX , startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter , startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2 , startBobPositionY,bobDiameter);


	roofObject=new Roof(width/2,height/4,width/4,20);

	
	rope1=new Rope(bob1.body,roofObject.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roofObject.body,-bobDiameter*1,0)
	rope3=new Rope(bob3.body,roofObject.body,0,0)
	rope4=new Rope(bob4.body,roofObject.body,bobDiameter*1,0)
	rope5=new Rope(bob5.body,roofObject.body,bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roofObject.display();
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
		console.log("high")
	}
}



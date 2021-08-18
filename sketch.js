
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world,back;
var roof2

function preload(){
back=loadImage("homewallbackground.jpg")



}

function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,500,30);
	roof2=new roof(1000,500,500,30);
	roof3=new dustbin(1330,700,150,30);
	roof4=new dustbin(1250,615,30,200);
	roof5=new dustbin(1400,615,30,200);

	bob1 = new bob(200,550,80)
	bob2 = new bob(360,575,80)
	bob3 = new bob(400,575,80)
	bob4 = new bob(440,575,80)
	bob5 = new bob(480,575,80)
	bob6 = new Bob2(760,490,100)



	
	rope1=new rope(bob1.body,roofObject.body,-140)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,30)
	rope4=new rope(bob4.body,roofObject.body,100)
	rope5=new rope(bob5.body,roofObject.body,170)
	
	
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(back);
  roofObject.display();

  textFont("Algerian")
textSize(40)
fill("red")
  text("press up arrow to play",width/1.8,height/10)
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

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
  bob6.display();



}




 function keyPressed() {
 	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-55});
 	}
 }
